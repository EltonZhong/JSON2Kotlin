
const _json = {
    "lastModifiedDate": "2018-12-26T13:17:55.050Z",
    "id": "CC9F936C-3EDA-4927-931E-62C383592335",
    "endDate": "2018-12-26T14:17:54.000Z",
    "calendarId": "AADFB7CD-D9F4-4B51-A826-DB8666ED10C0",
    "title": "Hello world",
    "originalStartDate": "2018-12-26T13:17:54.000Z",
    "location": "",
    "timeZone": "Asia/Shanghai",
    "isDetached": false,
    "allDay": false,
    "availability": "notSupported",
    "startDate": "2018-12-26T13:17:54.000Z",
    "creationDate": "2018-12-26T13:17:55.048Z"
};
generate(_json);

function generate(json) {
    Object.keys(json);
    const template =
`
data class Example(
    ${getVals(json)}
)
`
    console.log(template);
    return template;
}

function getVals(obj) {
    return Object.keys(obj).map(key => getVal(key, obj[key])).join(',\n    ');
}

function getVal(key, value) {
    return `val ${key}: ${getType(value)}`
}

function getType(va) {
    if (_.isDate) {
        // TODO
    }

    if (_.isString(va)) {
        return 'String';
    }

    if (_.isNumber(va)) {
        return 'Number';
    }

    if (_.isBoolean(va)) {
        return 'Boolean';
    }

    if (_.isArray(va)) {
        if (va.length === 0) {
            return 'List<Any>';
        }
        return `List<${getType(va[0])}>`
    }

    if (_.isObject(va)) {
        return 'Any';
    }
}
