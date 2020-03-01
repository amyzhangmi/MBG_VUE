let all = {name:'全部',value:''};

let delOption = [
    {name:'正常',value:0},
    {name:'已删除',value:1},
];
let sexOption = [
    {name:'男',value:0},
    {name:'女',value:1},
];

let userTypeOption = [
    { id: 0, name: "系统用户" },
    { id: 1, name: "APP用户" }
];

let visibleOption = [
    {name:'不可见',value:0},
    {name:'可见',value:1},
];

let dic = {
    all:all,
    delOption:delOption,
    sexOption:sexOption,
    userTypeOption:userTypeOption,
    visibleOption:visibleOption,
};


export function getWebDic(){
    return dic;
}
