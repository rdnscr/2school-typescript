import {RemoteService} from "./remoteService";

export class DataService {
    private localData: any;

    constructor(private readonly remoteService: RemoteService) {
    }

    public getData(): any {
        if (!this.localData) {
            this.localData = this.remoteService.getRemoteData();
        }

        return this.localData;
    }

}
