const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmwy609/",
            name: "ssmwy609",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmwy609/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "葛溪乡留守儿童信息管理系统"
        } 
    }
}
export default base
