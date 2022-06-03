
const xp = (encounterLevel, characterLevel) => {
  //standard ECL is equal to CR
  
  if(characterLevel === encounterLevel) {
    return 300*characterLevel;
  };

  //For Level 1, 2 or 3 characters
  if(characterLevel === 1 && encounterLevel === 1 || characterLevel === 2 && encounterLevel === 1 || characterLevel=== 3 && encounterLevel === 1) {
    return 300
  };
  if(characterLevel === 1 && encounterLevel === 1 || characterLevel === 2 && encounterLevel === 1 || characterLevel=== 3 && encounterLevel === 2) {
    return 2*300
  };
  if(characterLevel === 1 && encounterLevel === 1 || characterLevel === 2 && encounterLevel === 1 || characterLevel=== 3 && encounterLevel === 3) {
    return 3*300
  };
  if(characterLevel === 1 && encounterLevel === 4 || characterLevel === 2 && encounterLevel === 4 || characterLevel=== 3 && encounterLevel === 4) {
    return 1350;
  };
  if(characterLevel === 1 && encounterLevel === 6 || characterLevel === 2 && encounterLevel === 6 || characterLevel=== 3 && encounterLevel === 6) {
    return 1350*2;
  };
  if(characterLevel === 1 && encounterLevel === 8 || characterLevel === 2 && encounterLevel === 8 || characterLevel=== 3 && encounterLevel === 8) {
    return 1350*4;
  };
  if(characterLevel === 1 && encounterLevel === 10 || characterLevel === 2 && encounterLevel === 10 || characterLevel=== 3 && encounterLevel === 10) {
    return 1350*8;
  };
  // if(characterLevel === 1 && encounterLevel === 12 || characterLevel === 2 && encounterLevel === 12 || characterLevel=== 3 && encounterLevel === 12) {
  //   return 1350*16;
  // };

  //ECL is 1 higher then encounterLevel
  if(characterLevel-1 === encounterLevel) {
    return 400*characterLevel/2;
  };
  if(characterLevel-2 === encounterLevel) {
    return 300*characterLevel/2;
  }
  if(characterLevel-3 === encounterLevel) {
    return 400*characterLevel/4;
  }
  if(characterLevel-4 === encounterLevel) {
    return 300*characterLevel/4;
  }
  if(characterLevel-5 === encounterLevel) {
    return 400*characterLevel/8;
  }
  if(characterLevel-6 === encounterLevel) {
    return 300*characterLevel/8;
  }
  if(characterLevel-7 === encounterLevel) {
    return 400*characterLevel/16;
  }

  //ECL is lower then encounterLevel
  if(characterLevel+1 === encounterLevel) {
    return 400*characterLevel;
  }
  if(characterLevel+2 === encounterLevel) {
    return 300*characterLevel*2;
  }
  if(characterLevel+3 === encounterLevel) {
    return 400*characterLevel*2;
  };
  if(characterLevel+4 === encounterLevel) {
    return 300*characterLevel*4;
  }
  if(characterLevel+5 === encounterLevel) {
    return 400*characterLevel*4;
  }
  if(characterLevel+6 === encounterLevel) {
    return 300*characterLevel*8;
  }
  if(characterLevel+7 === encounterLevel) {
    return 400*characterLevel*8;
  }

  //if none of the coniditons are met
  console.log(`Level:${characterLevel} and Encounter Level:${encounterLevel}`)
  return `no value stored`;
}; 