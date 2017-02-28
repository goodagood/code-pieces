function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}

theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");

