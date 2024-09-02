const searchlogic = (key, valuearray,setInstructor, values) => {
  setInstructor([]);
  let dict = {};
  key = key.toLowerCase().replace(/\s+/g, "");
  for (let i = 0; i < valuearray.length; i++) {
    let instructor = "";
    let channelName = "";
    if ("instructor" in valuearray[i] && "channelName" in valuearray[i]) {
      instructor = valuearray[i].instructor.toLowerCase().replace(/\s+/g, "");
      channelName = valuearray[i].channelName.toLowerCase().replace(/\s+/g, "");
    } else {
      instructor = valuearray[i].name.toLowerCase().replace(/\s+/g, "");
    }
    if (instructor.includes(key) || channelName.includes(key)) {
      let newdict = { count: 1000, value: valuearray[i] };
      if ("channelName" in valuearray[i]){
        dict[newdict.value.channelLink] = newdict;
      }
      else{
        dict[newdict.value.courselink] = newdict;
      }
    }
  }
  if (Object.keys(dict).length === 0) {
    let keydict = {};
    for (let i = 0; i < key.length; i++) {
      keydict[key[i]] = i;
    }

    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < valuearray.length; i++) {
      let instructor = "";
      let channelName = "";
      if ("instructor" in valuearray[i] && "channelName" in valuearray[i]) {
        instructor = valuearray[i].instructor.toLowerCase().replace(/\s+/g, "");
        channelName = valuearray[i].channelName
          .toLowerCase()
          .replace(/\s+/g, "");
      } else {
        instructor = valuearray[i].name.toLowerCase().replace(/\s+/g, "");
      }
      count = 0;
      maxCount = 0;
      for (let j = 0; j < instructor.length; j++) {
        if (instructor[j] in keydict || channelName[j] in keydict) {
          count++;
        } else {
          if (count > maxCount) {
            maxCount = count;
          }
          count = 0;
        }
      }
      if (count > maxCount) {
        maxCount = count;
      }
      if (maxCount > Math.floor(key.length / 2)) {
        let newdict = { count: maxCount, value: valuearray[i] };
        dict[newdict.value.channelLink] = newdict;
      }
    }
  }
  let array = Object.entries(dict);
  let sortedArray = array.sort((a, b) => {
    return b[1].count - a[1].count;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    setInstructor((prev) => [...prev, sortedArray[i][1].value]);
  }
};

export default searchlogic;
