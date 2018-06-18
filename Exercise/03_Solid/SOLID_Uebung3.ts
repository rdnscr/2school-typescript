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
    private persistanceService: IPersistanceService;
    constructor(persistanceService: IPersistanceService) {
        this.persistanceService = persistanceService;
    }
    public saveAsFavourite(articleId: number): number {
        return this.persistanceService.save(articleId);
    }
}

const favController: FavouritesController = new FavouritesController(new CookiePersitanceService());

// tslint:enable max-classes-per-file
