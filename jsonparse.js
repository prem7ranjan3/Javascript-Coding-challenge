ObjectValues = function(obj) {
    let isArray = obj instanceof Array;
    for (let j in obj) {
        if (obj.hasOwnProperty(j)) {
            if (typeof(obj[j]) == "object") {
                if(!isArray)
                {
                    console.log(j + ":");
                }
                ObjectValues(obj[j]);
            } else if(!isArray) {
                console.log(j + ":" + obj[j]);
            }
        }
    }
}

const o = {
    "title": "Norway Tourism: Wildlife and Nature",
    "author": "",
    "categories": [
        {
            "name": "Travel",
            "scheme": "",
            "label": ""}
    ],
    "countries": [

    ],
    "content": [
        {
            "thumbnails": [
                {
                    "audioChannels": 0,
                    "audioSampleRate": 0,
                    "bitrate": 0,
                    "checksums": {
                        "md5": "7089E4E044069AE7702DEC686"
                    }}
            ]}
    ]
};

ObjectValues(o);