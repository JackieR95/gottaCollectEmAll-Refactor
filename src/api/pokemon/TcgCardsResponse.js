export class TcgCardsResponse {
    count;
    data = [];
    page;
    pageSize;
    totalCount;



    static async newFromResponse(resp) {
        let inst = new TcgCardsResponse();
        let respObj = await resp.json();

        inst.count = respObj.count;
        inst.data = respObj.data;
        inst.page = respObj.page;
        inst.pageSize = respObj.pageSize;
        inst.totalCount = respObj.totalCount;

        return inst;
    }

    cards() {
        return this.data;
    }
}