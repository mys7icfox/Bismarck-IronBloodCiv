import { Mod } from 'civ7-modding-tools';

// Create a new mod
const mod = new Mod({
    id: 'Bismarck - Iron Blood Civilization',
    version: '1.0',
});

// Add components to the mod (we'll do this in later sections)
// mod.add([...]);

// Build the mod
mod.build('./dist');