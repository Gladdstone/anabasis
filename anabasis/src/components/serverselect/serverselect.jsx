import { useState } from 'react';
import Select from '@mui/material/Select';

function ServerSelect() {
    const [selectedDataCenter, setSelectedDataCenter] = useState('');
    const [selectedServer, setSelectedServer] = useState('');

    const ffxivDataCenters = {
      // North America (NA)
      Aether: [
        "Adamantoise", "Cactuar", "Faerie", "Gilgamesh",
        "Jenova", "Midgardsormr", "Sargatanas", "Siren"
      ],
      Crystal: [
        "Balmung", "Brynhildr", "Coeurl", "Diabolos",
        "Goblin", "Malboro", "Mateus", "Zalera"
      ],
      Primal: [
        "Behemoth", "Excalibur", "Exodus", "Famfrit",
        "Hyperion", "Lamia", "Leviathan", "Ultros"
      ],
      Dynamis: [
        "Halicarnassus", "Maduin", "Marilith", "Seraph",
        "Cuchulainn", "Golem", "Kraken", "Rafflesia"
      ],

      // Europe (EU)
      Chaos: [
        "Cerberus", "Louisoix", "Moogle", "Omega",
        "Ragnarok", "Spriggan"
      ],
      Light: [
        "Alpha", "Lich", "Odin", "Phoenix",
        "Raiden", "Shiva", "Twintania", "Zodiark"
      ],

      // Japan (JP)
      Elemental: [
        "Aegis", "Atomos", "Carbuncle", "Garuda",
        "Gungnir", "Kujata", "Tonberry", "Typhon"
      ],
      Gaia: [
        "Alexander", "Bahamut", "Durandal", "Fenrir",
        "Ifrit", "Ridill", "Tiamat", "Ultima"
      ],
      Mana: [
        "Anima", "Asura", "Chocobo", "Hades",
        "Ixion", "Masamune", "Pandaemonium", "Titan"
      ],
      Meteor: [
        "Belias", "Mandragora", "Ramuh", "Shinryu",
        "Unicorn", "Valefor", "Yojimbo", "Zeromus"
      ],

      // Oceania (OC)
      Materia: [
        "Bismarck", "Ravana", "Sephirot", "Sophia", "Zurvan"
      ]
    };

    return (
        <>
        <label>
        Data Center:
        <Select native defaultValue="Aether" id="grouped-native-select" label="Data Center" onChange={e => setSelectedDataCenter(e.target.value)}>
            <optgroup label="NA">
                <option>Aether</option>
                <option>Crystal</option>
                <option>Dynamis</option>
                <option>Primal</option>
            </optgroup>
            <optgroup label="EU">
                <option>Chaos</option>
                <option>Light</option>
            </optgroup>
            <optgroup label="Oceania">
                <option>Materia</option>
            </optgroup>
            <optgroup label="JP">
                <option>Elemental</option>
                <option>Gaia</option>
                <option>Mana</option>
                <option>Meteor</option>
            </optgroup>
        </Select>
        </label>

        {selectedDataCenter && (
          <label>
            Server:
            <Select value={selectedServer} onChange={e => setSelectedServer(e.target.value)}>
              <option value="">-- Select Server --</option>
              {ffxivDataCenters[selectedDataCenter].map(server => (
                <option key={server} value={server}>{server}</option>
              ))}
            </Select>
          </label>
        )}
        </>
    )

}

export default ServerSelect;
