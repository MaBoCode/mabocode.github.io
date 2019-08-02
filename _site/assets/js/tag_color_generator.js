flat_colors = [
    "#fad390", 
    "#f6b93b", 
    "#fa983a", 
    "#e58e26", 
    "#f8c291", 
    "#e55039",
    "#eb2f06",
    "#b71540",
    "#6a89cc",
    "#4a69bd",
    "#1e3799",
    "#0c2461",
    "#82ccdd",
    "#60a3bc",
    "#3c6382",
    "#0a3d62",
    "#b8e994",
    "#78e08f",
    "#38ada9",
    "#079992",
];

flat_colors_2 = [
    "#f6e58d",
    "#f9ca24",
    "#7ed6df",
    "#22a6b3",
    "#ffbe76",
    "#f0932b",
    "#e056fd",
    "#be2edd",
    "#ff7979",
    "#eb4d4b",
    "#686de0",
    "#4834d4",
    "#badc58",
    "#6ab04c",
    "#30336b",
    "#130f40",
    "#dff9fb",
    "#c7ecee",
    "#95afc0",
    "#535c68",
];

tags = document.getElementsByClassName('tag');

totalTags = tags.length;

totalColors = flat_colors_2.length

added_color_ids = [];

step = 0;

for (let i = 0; i < totalTags; i++) {
    //Get random color id in array
    let id = Math.floor(Math.random() * totalColors);

    while(added_color_ids.includes(id)) {
        id = Math.floor(Math.random() * totalColors);
    }

    //If color for id not set yet

    tags[i].style.backgroundColor = flat_colors_2[id];
    added_color_ids.push(id);

    if (step === flat_colors_2.length) {
        added_color_ids = [];
        step = 0;
    }

    step++;
}