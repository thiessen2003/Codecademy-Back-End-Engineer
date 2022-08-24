const calculateWeight = (earthWeight = number, planet = string) => {
    const weight = earthWeight;
    if(planet==='Mercury') {
      return weight * 0.378
    } else if(planet==='Venus') {
      return weight * 0.907
    } else if(planet==='Mars') {
      return weight * 0.377
    } else if(planet==='Jupiter') {
      return weight * 2.36
    } else if(planet==='Saturn') {
      return weight * 0.916
    } else {
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
  }