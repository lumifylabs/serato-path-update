const debug  = process.argv.indexOf('-v') > -1

import fs from 'fs';
import seratojs from 'seratojs';

// confirm we have required arguments
if (process.argv.length < 3) {
    console.error(`\nUsage:  serato-path-update  <new directory path>  [-v]\n`);
    process.exit(1);
}

const newTracksLocation = process.argv[2];

// get all crates
const crates = seratojs.listCratesSync();
if (debug) console.log('All crates:', crates);

if (!crates || crates.length <= 0) {
    console.error('No crates found!');
}

console.info(`Iterating through ${crates.length} crates`);

// loop through each crate 
crates.forEach(crate => {

    // if crate does not exist (maybe subfolder or .ds_store type file)??
    try {
        fs.readFileSync(crate.seratoFolder+'/Subcrates/'+crate.filename)
    } catch (e) {
        if (debug) console.log(crate.filename, 'does not exist! skipping...')
        return;
    }

    console.info(`Updating tracks in ${crate.name}...`);
    
    let tracks = crate.getSongPathsSync()

    if (debug) console.log(`Total tracks in ${crate.name}:`, tracks.length)

    // if tracks found, change file location
    if (tracks.length > 0) {
        const newCrate = new seratojs.Crate(crate.name)

        tracks.forEach(track => {
            crate.addSong(`${newTracksLocation}${track}`);
        })

        fs.unlinkSync(crate.seratoFolder+'/Subcrates/'+newCrate.filename)

        crate.saveSync()
    }
})

console.info(`Done!`);