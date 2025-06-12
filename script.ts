function formatTimeUnit(unit: number): string {
    return unit < 10 ? '0' + unit : String(unit);
  }
  
  function getCurrentTime() {
    const now = new Date();
  
    // NOTE: you forgot parentheses here — see below!
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedHours = formatTimeUnit(hours);
    const formattedMinutes = formatTimeUnit(minutes);
    const formattedSeconds = formatTimeUnit(seconds);
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  console.log(getCurrentTime());