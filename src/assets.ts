import * as PIXI from 'pixi.js'
import { Game } from './game'

// json bestand moet in de static map omdat de pixi loader de json inleest en interpreteert
// spritesheet png moet in de static map omdat de pixi loader niet de dynamische bestandsnaam kan gebruiken
// bestanden die niet in de static map staan kan je als volgt importeren
// import catImage from "./images/cat_39.png"

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    private assets: AssetFile[] = []

    constructor(game: Game) {
        super()

        this.assets = [
            // Add assets
        ]

        this.assets.forEach(asset => {
            // Add to loader
        })

        this.onError.add((arg) => { console.error(arg) })
        this.onProgress.add((loader) => this.showProgress(loader))
        // call load and point to callback

    }

    private showProgress(loader) {
        console.log(`Loading ${loader.progress}%`)
    }
}