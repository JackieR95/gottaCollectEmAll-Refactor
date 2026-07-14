export class TcgSetsResponse {
    count;
    data = [];
    page;
    pageSize;
    totalCount;



    static async newFromResponse(resp) {
        let inst = new TcgSetsResponse();
        let respObj = await resp.json();

        inst.count = respObj.count;
        inst.data = respObj.data;
        inst.page = respObj.page;
        inst.pageSize = respObj.pageSize;
        inst.totalCount = respObj.totalCount;

        return inst;
    }

    sets() {
        return this.data;
    }
}