// tslint:disable max-classes-per-file

interface IPersistanceService {
    save(entity: any): number;
}

class CookiePersitanceService implements IPersistanceService {
    public save(entity: any): number {
        // tslint:disable-next-line:no-magic-numbers
        const id: number = Math.floor((Math.random() * 100) + 1);

        // Cookie persistance logic...
        return id;
    }
}

class FavouritesController {
    private readonly persistanceService: IPersistanceService;
    constructor(persistanceService: IPersistanceService) {
        this.persistanceService = persistanceService;
    }
    public saveAsFavourite(articleId: number): number {
        return this.persistanceService.save(articleId);
    }
}

class LocalStoragePersitanceService implements IPersistanceService {
    public save(entity: any): number {
        // tslint:disable-next-line:no-magic-numbers
        const id: number = Math.floor((Math.random() * 100) + 1);

        // Local storage persistance logic...
        return id;
    }
}

const favController: FavouritesController = new FavouritesController(new LocalStoragePersitanceService());
