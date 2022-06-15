class DbPersitanceService {
    public store(entity: any): number {        
        const id: number = Math.floor((Math.random() * 100) + 1);

        // DB persistance logic...
        return id;
    }
}

class CookiePersitanceService {
    public save(entity: any): number {
        const id: number = Math.floor((Math.random() * 100) + 1);

        // Cookie persistance logic...
        return id;
    }
}

class FavouritesController {
    private persistanceService: CookiePersitanceService;
    constructor(persistanceService: CookiePersitanceService) {
        this.persistanceService = persistanceService;
    }
    public saveAsFavourite(articleId: number): number {
        return this.persistanceService.save(articleId);
    }
}

const favController: FavouritesController = new FavouritesController(new CookiePersitanceService());
