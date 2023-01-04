try {
    console.log(val);
    throw new Error("val is not defined i think");
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}