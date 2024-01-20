// The operaitng system (os) module is a core Node.js module that provides functionality to interact
// with the underlying operating system, offering methods to access information such as platform, architecture,
// user details, memory usage, CPU information, and network interfaces. By utilizing the os module, developers
// can retrieve essential system-related data for building applications that require insights into the runtime
// environment, facilitating platform-specific optimizations and providing a foundation for system-level functionalities.

// intialize the os module
const os = require("os");

// Get the platform
const platform = os.platform();
console.log("Platform:", platform);

// Get the architecture of the system
const architecture = os.arch();
console.log("Architecture:", architecture);

// Get the information about the current user
const userInfo = os.userInfo();
console.log("User Info:", userInfo);

// Get the total memory of the system
const totalMemory = os.totalmem();
console.log("Total Memory:", totalMemory);

// Get the free memory of the system
const freeMemory = os.freemem();
console.log("Free Memory:", freeMemory);

// Get the number of CPUs
const cpus = os.cpus();
console.log("CPUs:", cpus.length);
