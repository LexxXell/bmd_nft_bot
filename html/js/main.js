const baseApiURL = {
    node: "/api_v1_no/",
    python: "/api_v1_py/"
}
const checkPostgres = "check_postgres";
const checkRedis = "check_redis";
const info_header = document.querySelector("#info-header")

function setApiCheckResults(baseURL, apiInfoObj, postgresInfoObj, redisInfoObj, api_callback) {
    const apiData = httpGetJSON(baseURL);
    const postgresData = httpGetJSON(baseURL + checkPostgres);
    const redisData = httpGetJSON(baseURL + checkRedis);
    apiInfoObj.textContent = apiData.message ? apiData.message : apiInfoObj.textContent;
    apiInfoObj.className = apiData.error ? "--p-err" : "--p-scs";
    if (api_callback) api_callback(apiData.error);
    postgresInfoObj.textContent = postgresData.message ? postgresData.message : postgresInfoObj.textContent;
    postgresInfoObj.className = postgresData.error ? "--p-err" : "--p-scs";
    redisInfoObj.textContent = redisData.message ? redisData.message : redisInfoObj.textContent;
    redisInfoObj.className = redisData.error ? "--p-err" : "--p-scs";
}

function httpGetJSON(theUrl) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    } catch {
        return { error: true }
    }
}

setApiCheckResults(
    baseURL = baseApiURL["python"],
    apiInfoObj = document.querySelector('#api_py_info'),
    postgresInfoObj = document.querySelector('#postgres_py_info'),
    redisInfoObj = document.querySelector('#redis_py_info'),
    api_callback = (api_error) => {
        if (api_error) {
            document.querySelector('#py-div').style.display = "none";
        } else {
            info_header.style.display = "none";
        }
    }
)

setApiCheckResults(
    baseURL = baseApiURL["node"],
    apiInfoObj = document.querySelector('#api_no_info'),
    postgresInfoObj = document.querySelector('#postgres_no_info'),
    redisInfoObj = document.querySelector('#redis_no_info'),
    api_callback = (api_error) => {
        if (api_error) {
            document.querySelector('#no-div').style.display = "none";
        } else {
            info_header.style.display = "none";
        }
    }
)