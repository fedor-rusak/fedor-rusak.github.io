const cards = {
	"Beastgrave": [
		{
			"id": "B1",
			"name": "Bestial Cunning",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when you play your third or subsequent gambit in a single round.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B2",
			"name": "Blood Ritual",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if there are two or more Ritual counters on your **leader's** fighter card.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B3",
			"name": "Bloodshed",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if *three* or more enemy fighters are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B4",
			"name": "Conquerors",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds one or more objectives in enemy territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B5",
			"name": "Despoilers",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge:** Score this immediately after an activation if your warband holds three or more objectives.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B6",
			"name": "Killing Blow",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter's **Attack action** that targets a fighter that has no wound tokens takes the target fighter out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B7",
			"name": "Proven Superiority",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* Any enemy **leaders** are out of action \\n *And:* Your **leader** is not out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B8",
			"name": "Raiders",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if three or more friendly fighters are in enemy territory.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B9",
			"name": "Stampede",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a third or subsequent friendly fighter makes a **Charge action** in the same phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B10",
			"name": "Survival of the Fittest",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* There are one or more surviving friendly fighters \\n *And: Five* or more fighters are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B11",
			"name": "Swarm the Battlefield",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if there are one of more friendly fighters in each of the following: your territory, enemy territory, and no one's territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B12",
			"name": "Taint of Ruin",
			"faction": "Grashrak's Despoilers",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband **cast** two or more spells in the preceding action phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B13",
			"name": "Baying Anger",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Dice to the first Range 1 or Range 2 **Attack action** made by a friendly fighter in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B14",
			"name": "Baying Hatred",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Damage to the first Range 1 or Range 2 **Attack action** made by a friendly fighter in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B15",
			"name": "Berserk Bellow",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** an enemy fighter adjacent to a friendly fighter and **push** them up to one hex, and up to one additional hex for each wound token the friendly fighter has.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B16",
			"name": "Bestial Vigour",
			"faction": "Grashrak's Despoilers",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, friendly fighters have +2 Move in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B17",
			"name": "Blood Taunt",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** a friendly fighter. They are **dealt** 1 damage. **Give** them a Guard token. +2 Dice to the first **Attack action** made by that fighter in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B18",
			"name": "Bull Charge",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "The first **Attack action** made by a friendly fighter as part of a **Charge action** in the next activation has **Innate (:atFury:)**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B19",
			"name": "Devolve",
			"faction": "Grashrak's Despoilers",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagCrit:):** If **cast**, **choose** an enemy fighter within four hexes of the caster. That fighter is **dealt** 1 damage. Then **push** that fighter up to one hex. This must take them closer to the caster.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B20",
			"name": "Skirmisher",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Move action** (not as part of a **Charge action**). That fighter can make a Range 3+ **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B21",
			"name": "Vile Invaders",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** up to two friendly **Hunters** and **push** them up to two hexes each.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B22",
			"name": "Weight of Numbers",
			"faction": "Grashrak's Despoilers",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Damage to the first **Attack action** made by a friendly **Hunter** in the next activation if there are one or more friendly **supporting Hunters**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B23",
			"name": "Blinding Attack",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 3 - :atFury: 3 - :boom: 1] \\n This **Attack action** has +1 Damage when it targets an adjacent enemy fighter.",
			"objectiveType": "-",
			"restrictions": "Ushkor",
			"set": "Beastgrave core set"
		},
		{
			"id": "B24",
			"name": "Bloodcrazed",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Damage to this fighter's Range 1 and Range 2 **Attack actions** if this fighter has one or more wound tokens and/or is adjacent to a fighter that has one or more wound tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B25",
			"name": "Cursed Flint",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 1 -(Cleave)-]",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Beastgrave core set"
		},
		{
			"id": "B26",
			"name": "Dogged Survivor",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an **Attack action** that targets this fighter and fails, **push** this fighter up to two hexes.",
			"objectiveType": "-",
			"restrictions": "Korsh 'the Sneak'",
			"set": "Beastgrave core set"
		},
		{
			"id": "B27",
			"name": "Endless Hatred",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's **Attack action** that takes an enemy fighter out of action, this fighter makes another **Attack action**. You can only use this reaction once per round.",
			"objectiveType": "-",
			"restrictions": "Gnarl",
			"set": "Beastgrave core set"
		},
		{
			"id": "B28",
			"name": "Heedless of Pain",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Wounds.",
			"objectiveType": "-",
			"restrictions": "Draknar, Murghoth Half-horn",
			"set": "Beastgrave core set"
		},
		{
			"id": "B29",
			"name": "Jabbing Spear",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Range to this fighter's Shortspear **Attack action**.",
			"objectiveType": "-",
			"restrictions": "Murghoth Half-horn, Korsh 'the Sneak'",
			"set": "Beastgrave core set"
		},
		{
			"id": "B30",
			"name": "Savage Bolt",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "*(Errata update)* The Grievous 1 keyword replaces the similar ability on this card. \\n [:Hex: 3 - :MagFocus: - - :boom: 1] \\n **Knockback** 1. On a **critical hit** this **Attack action** has +1 Damage.",
			"objectiveType": "-",
			"restrictions": "Grashrak Fellhoof",
			"set": "Beastgrave core set"
		},
		{
			"id": "B31",
			"name": "Sorcerous Trinket",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** one dice in the casting roll each time this fighter attempts to cast a spell.",
			"objectiveType": "-",
			"restrictions": "Grashrak Fellhoof",
			"set": "Beastgrave core set"
		},
		{
			"id": "B32",
			"name": "Trophy Taker",
			"faction": "Grashrak's Despoilers",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter's **Attack action** takes an adjacent enemy fighter out of action, gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "Draknar",
			"set": "Beastgrave core set"
		},
		{
			"id": "B33",
			"name": "Aspects of Kurnoth",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if all surviving friendly fighters are Inspired.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B34",
			"name": "Cry of the Wild",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "**Dual:** Score this in an end phase \\n *If:* A friendly Karthaen made the Hunting Horn action in the previous phase \\n *And:* There is a surviving friendly Karthaen.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B35",
			"name": "Gifts of the Kurnoth",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if three or more surviving friendly fighters each have one or more upgrades.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B36",
			"name": "Hunt's End",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "2",
			"description": "**Hybrid:** Score this in an end phase \\n *If:* An enemy fighter with a Wounds characteristic of 4 or greater is out of action \\n *Or:* Your warband holds three or more objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B37",
			"name": "Kurnoth's Snare",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an enemy fighter is **pushed** into a **lethal** hex.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B38",
			"name": "Purifying Rites",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if your warband holds all objectives in one or more player's territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B39",
			"name": "Ritual Kill",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when your warband takes an enemy fighter standing in the same hex as an objective out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B40",
			"name": "Run Down",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter takes an enemy fighter out of action with an **Attack action** made as part of a **Charge action**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B41",
			"name": "Run Through",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when your **leader** takes an enemy fighter out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B42",
			"name": "Safety in Swiftness",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if three or more surviving friendly fighters each have one or more Move and/or Charge tokens.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B43",
			"name": "Slay the Corrupted",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if *three* or more enemy fighters are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B44",
			"name": "Soulbinding",
			"faction": "Skaeth's Wild Hunt",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when your warband **casts** a spell.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B45",
			"name": "Binding Wind",
			"faction": "Skaeth's Wild Hunt",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, **choose** an enemy fighter within four hexes of the caster. **Give** that fighter a Move token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B46",
			"name": "Fleet of Foot",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** a friendly fighter that has no Move or Charge tokens. They make a **Move action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B47",
			"name": "Healing Breeze",
			"faction": "Skaeth's Wild Hunt",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, pick a hex within four hexes of the caster. **Heal** (1) any fighters in that hex and in hexes adjacent to that hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B48",
			"name": "Hunt in Concert",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** up to two friendly fighters and **push** each of them up to one hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B49",
			"name": "Might of Kurnoth",
			"faction": "Skaeth's Wild Hunt",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, **choose** a friendly fighter. Their Range 1 and Range 2 **Attack actions** have +1 Damage. This spell **persists** until the end of the round or until that fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B50",
			"name": "Pounce",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "**Push** a friendly fighter up to three hexes so that they are adjacent to an enemy fighter that has one or more wound tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B51",
			"name": "Retrieve Javelin",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "Your **leader** is no longer considered to have made a Javelin of the Hunt **Attack action**.",
			"objectiveType": "-",
			"restrictions": "Skaeth",
			"set": "Beastgrave core set"
		},
		{
			"id": "B52",
			"name": "Song of Swiftness",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "Friendly fighters have +1 Move. This effect **persists** until the end of the round or until the friendly Karthaen is taken out of action.",
			"objectiveType": "-",
			"restrictions": "Karthaen",
			"set": "Beastgrave core set"
		},
		{
			"id": "B53",
			"name": "Strike in Concert",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "The first Range 1 or Range 2 **Attack action** made by a friendly fighter in the next activation has +1 Damage for each friendly **supporting** fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B54",
			"name": "Swift as the Wind",
			"faction": "Skaeth's Wild Hunt",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** a friendly fighter that has one or more Move tokens. **Remove** one of those tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B55",
			"name": "Battle Cry",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Action: Remove** all Guard tokens from adjacent enemy fighters. **Push** all adjacent enemy fighters up to one hex.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Beastgrave core set"
		},
		{
			"id": "B56",
			"name": "Divine Strength",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's **Attack actions** have **Knockback** 1.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B57",
			"name": "Eye of Kurnoth",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's **Attack actions** have +1 Dice. If the target is a **Quarry**, this fighter's **Attack actions** also have **Ensnare**.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Beastgrave core set"
		},
		{
			"id": "B58",
			"name": "Fast Shot",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's activation in which they made a Range 3+ **Attack action**, they make another Range 3+ **Attack action**.",
			"objectiveType": "-",
			"restrictions": "Althaen",
			"set": "Beastgrave core set"
		},
		{
			"id": "B59",
			"name": "Great Strides",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "+2 Move.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B60",
			"name": "Hale Charm",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter is **dealt** damage, reduce that damage by 1, to a minimum of 1.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Beastgrave core set"
		},
		{
			"id": "B61",
			"name": "Hunting Aspect",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "+2 Move. \\n +1 Defence. \\n +1 Wounds.",
			"objectiveType": "-",
			"restrictions": "Lighaen",
			"set": "Beastgrave core set"
		},
		{
			"id": "B62",
			"name": "Kurnoth's Mark",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** one dice in the defence roll when this fighter is the target of an **Attack action**. \\n **Reaction:** After a friendly fighter's **Attack action** that takes an adjacent enemy fighter out of action, if this card is in your hand, give that friendly fighter this upgrade (do not spend any glory points).",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Beastgrave core set"
		},
		{
			"id": "B63",
			"name": "Shield Slash",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 3]",
			"objectiveType": "-",
			"restrictions": "Skaeth",
			"set": "Beastgrave core set"
		},
		{
			"id": "B64",
			"name": "Vicious Darts",
			"faction": "Skaeth's Wild Hunt",
			"type": "Upgrade",
			"glory": "-",
			"description": "*(Errata update)* The Grievous 1 keyword replaces the similar ability on this card. \\n [:Hex: 3 - :MagFocus: - - :boom: 1] \\n **Ensnare**. On a **critical hit** this **Attack action** has +1 Damage.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "Beastgrave core set"
		},
		{
			"id": "B65",
			"name": "Bravely Done!",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter with one or more **supporting** fighters takes an enemy fighter out of action with an **Attack action**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B66",
			"name": "Charnel House",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "2",
			"description": "**Hybrid:** Score this in the third end phase \\n *If:* All surviving friendly fighters are in enemy territory \\n *Or:* There are no enemy fighters in your territory.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B67",
			"name": "Conquering Heroes",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds one or more objectives in enemy territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B68",
			"name": "Defending the Hearth",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an enemy fighter is taken out of action in your territory.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B69",
			"name": "Ghoul Pack",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if three or more friendly fighters are adjacent to the same enemy fighter.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B70",
			"name": "Glory of the Court",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if three or more surviving friendly fighters are Inspired.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B71",
			"name": "In the Name of the King",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge:** Score this immediately after an activation if your warband holds three or more objectives.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B72",
			"name": "Incomprehensible Scheme",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds more objectives than each enemy warband.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B73",
			"name": "Mordant Triumph",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if you have scored five or more **surge** objective cards in this game.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B74",
			"name": "Mouths to Feed",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if there are fewer surviving enemy fighters than there are enemy fighters out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B75",
			"name": "Pervasive Delusion",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when you play your third or subsequent gambit card in a single round.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B76",
			"name": "Shifting Madness",
			"faction": "The Grymwatch",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if your warband holds the objective when the same number as the current round (e.g. objective 1 in the first round).",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B77",
			"name": "Appalling Visage",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter and one adjacent enemy fighter. **Push** the chosen enemy fighter up to 2 hexes away from the chosen friendly fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B78",
			"name": "Combat Drill",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** After a friendly fighter's **Move action** made as part of a **Charge action**, **choose** another friendly fighter. The chosen fighter makes a **Move action**. The chosen fighter must end that **Move action** adjacent to the fighter making the **Charge action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B79",
			"name": "Double Time",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Move action** (but not during a superaction). That fighter makes another **Move action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B80",
			"name": "Horrifying Spectacle",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during an **Attack action** or gambit that has **dealt** enough damage to an enemy fighter to take it out of action, but before removing the fighter from the battlefield. All friendly fighters adjacent to that fighter are Inspired.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B81",
			"name": "Pack, Advance!",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one or more friendly **Crypt Ghouls** and **push** each of the chosen fighters up to 2 hexes.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B82",
			"name": "Recycled Riches",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "Take all the cards from your power discard pile that have the Grymwatch warband symbol. Shuffle them face down, then add the top card to your hand. Return the other cards to your power discard pile.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B83",
			"name": "Scrabbling Claws",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one enemy fighter that has one or more upgrades and is adjacent to one or more friendly fighters. The chosen fighter's player picks one of that fighter's upgrades and **discards** it.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B84",
			"name": "Shattering Impact",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Attack action**, if that fighter has one or more upgrades. Pick one of their upgrades and one of their target's upgrades. Both cards are **discarded**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B85",
			"name": "Stench of Victory",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during a friendly fighter's successful **Attack action**, before the deal damage step. **Choose** another friendly fighter and **push** the chosen fighter up to 3 hexes so they are adjacent to the target.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B86",
			"name": "Strident Summons",
			"faction": "The Grymwatch",
			"type": "Ploy",
			"glory": "-",
			"description": "A friendly Crakmarrow makes the Ghoul Call action.",
			"objectiveType": "-",
			"restrictions": "Duke Crakmarrow",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B87",
			"name": "Aura of Command",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Action:** **Choose** two other friendly fighters. You cannot **choose** fighters with any Move or Charge tokens. Each of the chosen fighters makes a **Move action**.",
			"objectiveType": "-",
			"restrictions": "Duke Crakmarrow",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B88",
			"name": "Drawn to Weakness",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an activation, **push** this fighter 1 hex towards an enemy fighter that has one or more wound tokens.",
			"objectiveType": "-",
			"restrictions": "Duke's Harriers",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B89",
			"name": "Grip of Madness",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's **Move action**, if this fighter is holding an objective, place a Madness counter on this card. While there are one or more Madness counters on this card, this fighter cannot be **pushed**. **Remove** all Madness counters from this card when this fighter makes a **Move action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B90",
			"name": "Heroic Vision",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Dice to this fighter's Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B91",
			"name": "Hunter's Nose",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "Each enemy fighter is a **Quarry**. +1 Dice to this fighter's **Attack actions** that target a **Quarry**.",
			"objectiveType": "-",
			"restrictions": "Valreek the Tracker",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B92",
			"name": "Impervious Delusion",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "If this fighter would be **dealt** more than 2 damage by an **Attack action** or gambit, they are instead **dealt** 2 damage. This damage cannot be further modified.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B93",
			"name": "Right-hand Ghoul",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After a friendly Crakmarrow's **Move action**, if this fighter has no Move or Charge tokens, this fighter makes a **Move action**. This fighter must end the **Move action** adjacent to a friendly Crakmarrow",
			"objectiveType": "-",
			"restrictions": "Gristlewel Greatsword",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B94",
			"name": "Seized Weapon",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "When you give this upgrade to a friendly fighter from your hand, one adjacent enemy fighter is **dealt** 1 damage. \\n [:Hex: 1 - :atFury: 3 - :boom: 2]",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B95",
			"name": "Severed Trophy",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter's **Attack action** takes an adjacent enemy fighter out of action, gain 1 additional glory point.",
			"objectiveType": "-",
			"restrictions": "Duke Crakmarrow",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B96",
			"name": "Well Motivated",
			"faction": "The Grymwatch",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Damage to this fighter's Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B97",
			"name": "Burning Spite",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if two or more surviving friendly fighters are Inspired.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B98",
			"name": "Chase Down",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if two or more friendly fighters are adjacent to the same enemy fighter.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B99",
			"name": "Conquered Land",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if your warband holds all objectives in one or more player's territories.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B100",
			"name": "Cruel Hunters",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* Two or more enemy fighters are out of action \\n *And:* One or more friendly fighters are in enemy territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B101",
			"name": "Feeding Time",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an enemy fighter is taken out of action by a friendly fighter's Snarlfang's Jaws **Attack action**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B102",
			"name": "Lay Waste",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "5",
			"description": "Score this in an end phase if all enemy fighter's are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B103",
			"name": "Leading the Charge",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after your **Leader** makes a successful **Attack action** as part of a **Charge action**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B104",
			"name": "Loaded with Plunder",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if one or more friendly fighters have three or more upgrades.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B105",
			"name": "Marking Your Territory",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds one or more objectives in enemy territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B106",
			"name": "No Mercy",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly fighter's successful **Attack action** that targeted an enemy fighter with one or more wound tokens.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B107",
			"name": "Plunderers",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if each surviving friendly fighter has one or more upgrades.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B108",
			"name": "Swift Hunters",
			"faction": "Rippa's Snarlfangs",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if three or more surviving friendly fighters each have one or more Move and/or Charge tokens.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B109",
			"name": "Defensive Manoeuvre",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter. **Push** that fighter up to 1 hex away from the nearest enemy fighter. **Give** the friendly fighter one Guard token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B110",
			"name": "Furious Reprisal",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after an enemy fighter's **Attack action** that targeted a friendly fighter. That friendly fighter makes an **Attack action** that must target that enemy fighter, and you can **re-roll** any number of dice in the attack roll.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B111",
			"name": "Hamstring",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's  successful Snarlfang's Jaws **Attack action**. **Give** the target of that **Attack action** one Move token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B112",
			"name": "Narrow Escape",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this when a friendly fighter is **dealt** damage, before placing wound tokens on their fighter card. Reduce that damage by 1, to a minimum of 1.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B113",
			"name": "Pack Tactics",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter and up to two friendly fighters adjacent to that fighter. **Push** each chosen fighter 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B114",
			"name": "Savage Mauling",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "The first Range 1 or Range 2 **Attack action** made by a friendly fighter in the next activation has +1 Dice and +1 Damage for each **supporting** friendly fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B115",
			"name": "Smell Weakness",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "The first **Attack action** made by a friendly fighter in the next activation has **Cleave** and **Ensnare** if the target has one or more wound tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B116",
			"name": "Unbridled Ferocity",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's failed Snarlfang's Jaws **Attack action**. That fighter makes a Snarlfang's Jaws **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B117",
			"name": "Venomous Spittle",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's successful Snarlfang's Jaws **Attack action**. The target of that **Attack action** is **dealt** 1 damage at the end of each action phase. This effect **persists** until the target is out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B118",
			"name": "Vindictive Attack",
			"faction": "Rippa's Snarlfangs",
			"type": "Ploy",
			"glory": "-",
			"description": "+2 Dice to the first **Attack action** made by a friendly fighter in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B119",
			"name": "Bonded",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter makes an **Attack action** that targets an adjacent enemy fighter, or is the target of an **Attack action** made by an adjacent enemy fighter, this fighter is considered to have one additional **supporting** fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B120",
			"name": "Boss Hat",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "If your **leader** is out of action: \\n +1 Defence \\n +1 Damage to this fighter's Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B121",
			"name": "Circling Hunter",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's **Attack action** (but not during a superaction) or after an **Attack action** that targets this fighter (but not during a superaction), **push** this fighter 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B122",
			"name": "Embittered Survivor",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Wounds.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B123",
			"name": "Fiendish Jab",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Damage to this fighter's Stabbin' Stikka **Attack action** for each :atCrit: in the attack roll.",
			"objectiveType": "-",
			"restrictions": "Stabbit",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B124",
			"name": "Hidden Slitta",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 1 -(Cleave)-]",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B125",
			"name": "Hunt as One",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter supports a friendly fighter, this fighter is considered to be two **supporting** fighters.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B126",
			"name": "Loping Strides",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "+2 Move.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B127",
			"name": "Pack Leader",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** any number of dice in this fighter's attack rolls for the Snarlfang's Jaws **Attack action**.",
			"objectiveType": "-",
			"restrictions": "Rippa Narkbad",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B128",
			"name": "Quickdrop Venom",
			"faction": "Rippa's Snarlfangs",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's successful **Attack action** (other than a Snarlfang's Jaws **Attack action**), roll one attack dice. On a :atSmash: or :atCrit: the target of that **Attack action** is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B129",
			"name": "Blessed Endurance",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an **Attack action** with a Damage characteristic of 3 or more targets a friendly fighter and succeeds, if the friendly fighter is not taken out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B130",
			"name": "Blessings Three",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if any surviving friendly fighter has three or more upgrades.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B131",
			"name": "Chosen Warriors",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* There are one or more surviving friendly fighters \\n *And: Three* or more enemy fighters are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B132",
			"name": "Cycle of Decay",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if you played two or more **Cycle** ploys in the preceding action phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B133",
			"name": "Faithful Reward",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if each surviving friendly fighter is Inspired.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B134",
			"name": "Fell the Faithless",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an enemy **leader** is taken out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B135",
			"name": "Nurgle's Garden Grows",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "2",
			"description": "**Hybrid:** Score this in the third end phase \\n *If:* There are no enemy fighters in your territory \\n *Or:* Your warband holds more objectives than each opposing warband.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B136",
			"name": "Rotbringers",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband successfully **cast** two or more spells in the preceding action phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B137",
			"name": "Sacred Tri-lobe",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in an end phase if your warband holds three or more objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B138",
			"name": "Seeping Rot",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter holding an objective is the target of an **Attack action** and is not **driven back**, if that fighter survives.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B139",
			"name": "Spread his Blessings",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds one or more objectives in enemy territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B140",
			"name": "Strength of the Devoted",
			"faction": "The Wurmspat",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in the third end phase if no friendly fighters are out of action.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B141",
			"name": "Blades of Putrefaction",
			"faction": "The Wurmspat",
			"type": "Spell",
			"glory": "-",
			"description": "*(Errata update)* The Grievous 1 keyword replaces the similar ability on this card. \\n **Gambit Spell (:MagFocus:):** If **cast**, friendly fighters' Range 1 and Range 2 **Attack actions** have +1 Damage on a **critical hit**. This spell **persists** until the end of the round.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B142",
			"name": "Blessing of Rust",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one enemy fighter adjacent to one or more friendly fighters. The chosen fighter's Defence characteristic is :dfDodge:. This effect **persists** until the chosen fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B143",
			"name": "Fecund Vigour",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Cycle** \\n You can **re-roll** one attack dice in friendly fighter's attack rolls. This effect **persists** until after the next **Attack action** made by a friendly fighter, the end of the round, or you play another **Cycle** ploy.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B144",
			"name": "Gift of Contagion",
			"faction": "The Wurmspat",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:)** If **cast**, **choose** one enemy fighter within 3 hexes of the casts. -1 Damage (to a minimum of 1) from the chosen fighter's **Attack actions**. This spell **persists** until the end of the round or the chosen fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B145",
			"name": "Nauseous Revulsion",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Cycle** \\n -1 Dice (to a minimum of 1) from **Attack actions** made by enemy fighters adjacent to one or more friendly fighters. This effect **persists** until the end of the round or you play another **Cycle** ploy.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B146",
			"name": "Rampant Disease",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Cycle** \\n Roll one attack dice for each enemy fighter adjacent to one or more friendly fighters. For each roll of :atCrit: that enemy fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B147",
			"name": "Rancid Visitations",
			"faction": "The Wurmspat",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagChannel::MagChannel:):** If **cast**, each enemy fighter adjacent to the caster is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B148",
			"name": "Steady Advance",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** up to two friendly fighters and **push** each chosen fighter 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B149",
			"name": "The Burgeoning",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Cycle** \\n **Heal (1)** the first friendly fighter that moves, is **placed**, **pushed**, or **driven back** into a **lethal** hex. That fighter is not **dealt** damage from the **lethal** hex. This effect **persists** until a friendly fighter is healed in this way or you play another **Cycle** ploy.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B150",
			"name": "Unnatural Vitality",
			"faction": "The Wurmspat",
			"type": "Ploy",
			"glory": "-",
			"description": "**Cycle** +1 Move to friendly fighters. This effect **persists** until the end of the round or you play another **Cycle** ploy.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B151",
			"name": "Fly Swarm",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "-1 Dice (to a minimum of 1) from **Attack actions** with a Range of 3 or more that target this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B152",
			"name": "Foetid Shroud",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** one dice in this fighter's defence rolls.",
			"objectiveType": "-",
			"restrictions": "Fecula Flyblown",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B153",
			"name": "Hulking Physique",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "-1 Move (to a minimum of 0) \\n +1 Wounds \\n +1 Damage to this fighter's Range 1 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "Ghulgoch the Butcher",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B154",
			"name": "Living Plague",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an enemy fighter's successful Range 1 **Attack action** that targets this fighter, roll one defence dice. On a roll of :dfBlock: or :dfCrit: that enemy fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B155",
			"name": "Pestilent Deliverer",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's **Attack actions** made as part of a **Charge action** have **Cleave**.",
			"objectiveType": "-",
			"restrictions": "Sepsimus Plaguesworn",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B156",
			"name": "Putrid Vomit",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 3 - :atFury: 3 - :boom: 1]",
			"objectiveType": "-",
			"restrictions": "Fecula Flyblown, Ghulgoch the Butcher",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B157",
			"name": "Retchling",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "Each time this fighter attempts to **cast** a spell, after the casting roll, you can change one of the symbols rolled to :MagChannel:. In addition, this fighter cannot be **dealt** damage by **backlash**.",
			"objectiveType": "-",
			"restrictions": "Fecula Flyblown",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B158",
			"name": "Stolid Bulk",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter cannot be **driven back**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B159",
			"name": "Unstoppable Tread",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's activation, **push** this fighter 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B160",
			"name": "Virulent Blade",
			"faction": "The Wurmspat",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** one attack dice in this fighter's attack rolls for Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "Ghulgoch the Butcher, Sepsimus Plaguesworn",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B161",
			"name": "Always Moving",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* There is at least one surviving friendly fighter \\n *And:* There are no friendly fighters in your territory.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B162",
			"name": "Arm of the Everwinter",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when your warband **removes** a feature token from the battlefield, or flips a feature token.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B163",
			"name": "Boxed In",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if there are three of more friendly fighters adjacent to the same enemy fighter.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B164",
			"name": "Butchering",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if there are more enemy fighters out of action than surviving enemy fighters.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B165",
			"name": "Dinner Time",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an enemy fighter Moves into, is **pushed** into or is **placed** in the same hex as a friendly Trap model.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B166",
			"name": "Extra Crunchy",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge:** Score this immediately when your warband takes an enemy fighter with three or more upgrades out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B167",
			"name": "Flush Them Out",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately if your warband **pushes** an enemy fighter that is not adjacent to your **leader**, and after the **push** they are adjacent to your **leader**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B168",
			"name": "Hunter's Feast",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge, Dual:** Score this immediately \\n *When:* Your **leader's Attack action** takes an enemy fighter out of action \\n *And:* Your **Leader** made one or more **Attack actions** that took an enemy fighter out of action earlier in this phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B169",
			"name": "Momentarily Sated",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "5",
			"description": "Score this in an end phase if *all enemy fighters* are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B170",
			"name": "Surprising Competence",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly **Gnoblar's Attack action** takes an enemy fighter out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B171",
			"name": "Top of the Food Chain",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your **leader** is the only surviving **leader**.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B172",
			"name": "Unexpected Cunning",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after playing your third or subsequent power card in the same phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B173",
			"name": "Carnivore Senses",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "The first **Attack action** made by a friendly **Hunter** in the next activation has **Ensnare**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B174",
			"name": "Driven Onwards",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter that has one or more Move tokens. **Remove** those tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B175",
			"name": "Frozen Earth",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick a feature token in a hex that contains or is adjacent to your **leader**. **Remove** it from the battlefield.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B176",
			"name": "Gnoblar Scramble",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Push** each friendly **Gnoblar** up to 2 hexes.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B177",
			"name": "Gotcha!",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's successful Trap Launcher **Attack action** that does not take the target out of action. **Give** the target one Move token.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B178",
			"name": "Icy Breath",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one enemy fighter within 3 hexes of your **leader** and roll one magic dice. On a roll of :MagChannel: or :MagCrit: the chosen fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B179",
			"name": "More Traps",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one feature token in a hex that contains or is adjacent to a friendly Bushwakka. Flip that token.",
			"objectiveType": "-",
			"restrictions": "Bushwakka",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B180",
			"name": "Near Miss",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly **Hunter's** failed **Attack action**. **Push** the target 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B181",
			"name": "Quick Snack",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after an enemy fighter adjacent to your **leader** is taken out of action. If the enemy fighter's Wounds characteristic is 4 or more, **Heal (2)** your **leader**, otherwise **Heal (1)** your **leader**.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B182",
			"name": "Ravenous Fury",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after your **leader's** failed Range 1 **Attack action**. Your **leader** makes one **Attack action**.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B183",
			"name": "Desperate Parry",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** During an **Attack action** that targets this fighter, before the deal damage step, roll one defence dice. On a roll of :dfBlock: or :dfCrit: the combat sequence ends and this fighter is **dealt** no damage. Then **discard** this card.",
			"objectiveType": "-",
			"restrictions": "Gnoblar",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B184",
			"name": "Famed Hunter",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** one attack dice in this fighter's attack rolls.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B185",
			"name": "Hunting Beast",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's successful **Attack action**, pick one: \\n **Push** the target 1 hex, or **push** this fighter 1 hex.",
			"objectiveType": "-",
			"restrictions": "Thrafnir",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B186",
			"name": "Living Avalanche",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Damage to this fighter's Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B187",
			"name": "Massive Bulk",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "-2 Move (to a minimum of 0) \\n +2 Wounds.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B188",
			"name": "Plucky Pair",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "Rolls of :atSup1: are successes in this fighter's attack rolls and defence rolls.",
			"objectiveType": "-",
			"restrictions": "Luggit and Thwak",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B189",
			"name": "Savage Instinct",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's Range 1 and Range 2 **Attack actions** have **Ensnare**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B190",
			"name": "Scion of the Everwinter",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Action: Give** each adjacent enemy fighter one Move token.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B191",
			"name": "Toughened Hide",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "*(Errata update)* When this fighter is **dealt** damage, reduce that damage by 1 (to a minimum of 1).",
			"objectiveType": "-",
			"restrictions": "Thrafnir",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B192",
			"name": "Veteran Hunter",
			"faction": "Hrothgorn's Mantrappers",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Action: Draw** up to two power cards.",
			"objectiveType": "-",
			"restrictions": "Hrothgorn Mantrapper, Gnoblar",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B193",
			"name": "Blessings of Khaine",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if two or more surviving friendly fighters are Inspired.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B194",
			"name": "Blood Rite",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter holding an objective makes an **Attack action** that takes an enemy fighter out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B195",
			"name": "Consecrate to Khaine",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter's Range 1 or Range 2 **Attack action** takes an enemy fighter holding an objective out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B196",
			"name": "Daughters of the First Temple",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase of *two* or more enemy fighters are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B197",
			"name": "Devoted Disciple",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if one or more surviving friendly fighters have one or more wound tokens.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B198",
			"name": "Perfect Kill",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter's **Attack action deals** exactly enough damage to take that fighter's target out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B199",
			"name": "Proof of Devotion",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "3",
			"description": "**Hybrid:** Score this in the third end phase \\n *If:* All enemy fighters are out of action \\n *Or:* Your warband holds all objectives in enemy territory.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B200",
			"name": "Purposeful Strike",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if a friendly fighter with one or more Charge tokens is holding an objective.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B201",
			"name": "Ritualised Formation",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in an end phase if your warband holds three or more objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B202",
			"name": "Swift Sacrifice",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly **leader** or Kyrae makes a Range 1 or Range 2 **Attack action** that takes an enemy fighter out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B203",
			"name": "Torturous Death",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when your warband makes a third or subsequent **Attack action** that targets the same enemy fighter in this phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B204",
			"name": "Triumphant Stance",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* One friendly fighter is holding an objective \\n *And:* No other fighter is holding an objective.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B205",
			"name": "Bloodbane Venom",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n **Reaction:** Play this after a friendly fighter's successful Range 1 or Range 2 **Attack action**. Roll three attack dice. For each roll of :atCrit: the target of that **Attack action** is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B206",
			"name": "Carve a Rune",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during a friendly fighter's Range 1 or Range 2 **Attack action** that succeeds, before dealing damage, if there was one or more :atCrit: in the attack roll. Gain 1 spent glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B207",
			"name": "Catechism of Murder",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter. That fighter is Inspired.",
			"objectiveType": "-",
			"restrictions": "Morgwaeth the Blooded",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B208",
			"name": "Crimson Rejuvenation",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Heal** (1) each friendly fighter within 2 hexes of your **leader**.",
			"objectiveType": "-",
			"restrictions": "Morgwaeth the Blooded",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B209",
			"name": "Drilled to Perfection",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter and up to one adjacent friendly fighter. **Give** each chosen fighter one Guard token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B210",
			"name": "Fanatical Faith",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "The first time a friendly fighter would be **dealt** any amount of damage in the next activation, that fighter is **dealt** 1 damage instead.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B211",
			"name": "Headlong Fury",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one Inspired friendly fighter. The chosen fighter makes a **Move action**. Do not **give** the chosen fighter a Move token for that action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B212",
			"name": "Incredible Agility",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "*(Errata update)* The Flying trait replaces the similar ability on this card. \\n In the next activation, friendly fighters other than Kyrae treat **lethal** hexes as normal hexes and can move through **occupied** hexes, but cannot end their move in an **occupied** hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B213",
			"name": "Perfect Precision",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "You can **re-roll** one attack dice in the attack roll of the first **Attack action** made by a friendly fighter in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B214",
			"name": "Zealot's Rage",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Attack action** that fails. That fighter makes an **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B215",
			"name": "Crimson Shard",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** one attack dice in this fighter's attack rolls for Range 1 or Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "Morgwaeth the Blooded",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B216",
			"name": "Crone Blade",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 2] \\n **Reaction:** After this **Attack action**, if it succeeded, **Heal** (1) this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B217",
			"name": "Death Dancer",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's **Attack action** (not during a superaction), **push** this fighter 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B218",
			"name": "High Oracle's Butcher",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "After this fighter's **Attack action** that takes an adjacent enemy fighter out of action, gain 1 additional glory point.",
			"objectiveType": "-",
			"restrictions": "Kyrae",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B219",
			"name": "Invigorated Attack",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Dice to this fighter's **Attack actions** while this fighter is holding an objective.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B220",
			"name": "Rapturous Defence",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Defence.",
			"objectiveType": "-",
			"restrictions": "Kyrssa, Lethyr",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B221",
			"name": "Rune of Khaine",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** When this fighter is taken out of action by an enemy fighter's **Attack action** or an enemy warband's gambit, before removing this fighter from the battlefield, each adjacent enemy fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "Morgwaeth the Blooded",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B222",
			"name": "Rune of Slaughter",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Damage to this fighter's Range 1 and Range 2 **Attack actions** for each :atCrit: in the attack roll.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B223",
			"name": "Victor of a Thousand Duels",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** During a Range 1 **Attack action** that targets this fighter and fails, before the Drive Back step, roll one attack dice. On a roll of :atSmash: or :atCrit: this fighter cannot be **driven back** and can make an **Attack action**. It must target the attacker.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B224",
			"name": "Whirling Whip",
			"faction": "Morgwaeth's Blade-coven",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 2 -(Scything)-]",
			"objectiveType": "-",
			"restrictions": "Khamyss",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B225",
			"name": "Avalanche of Aggression",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if there are more surviving friendly fighters than surviving enemy fighters.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B226",
			"name": "Brute Triumph",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "5",
			"description": "Score this in an end phase if *all enemy fighters* are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B227",
			"name": "Brutes is da Best",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your **leader** is the only surviving **leader**.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B228",
			"name": "Called to Waaagh!",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if there are six or more Waaagh! counters on friendly fighters' fighter cards.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B229",
			"name": "Good Day's Work",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if there are more enemy fighters out of action than surviving enemy fighters.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B230",
			"name": "Got It, Boss",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if your warband holds one or more objectives in enemy territory.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B231",
			"name": "In Their Element",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if each surviving friendly fighter is Inspired.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B232",
			"name": "Might of the Orruk",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a friendly fighter's **Attack action** with a Damage characteristic of 4 or more succeeds.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B233",
			"name": "Now Wot?",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if your warband holds two or more objectives.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B234",
			"name": "Orruk Kunnin'",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when you play your third or subsequent gambit in this round.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B235",
			"name": "Proppa Rumble",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if four or more fighters are out of action and/or have wound tokens.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B236",
			"name": "Waaagh! Unleashed",
			"faction": "Morgok's Krushas",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if you **removed** four or more Waaagh! counters from friendly fighters' fighter cards in the previous phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B237",
			"name": "Berserk Fortitude",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during an **Attack action** that targets a friendly fighter, before the deal damage step. **Remove** any number of Waaagh! counters from that fighter's fighter card. The **Attack action** has -1 Damage for each counter **removed** (to a minimum of 1).",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B238",
			"name": "Berserk Strength",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during a friendly fighter's Range 1 or Range 2 **Attack action** after choosing a target. **Remove** any number of Waaagh! counters from that friendly fighter's fighter card. \\n +1 Damage to that **Attack action** for each counter **removed**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B239",
			"name": "Brawling",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter adjacent to one or more enemy fighters. Place one Waaagh! counter on the chosen fighter's fighter card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B240",
			"name": "Brutal Attack",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Dice to the first **Attack action** made by a friendly fighter in the next activation. After that **Attack action**, place one Waaagh! counter on that fighter's fighter card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B241",
			"name": "Brutal Kunnin'",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Move action** but not during a superaction. That fighter make an **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B242",
			"name": "Brutal Reprisal",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during an **Attack action** that targets a friendly fighter and succeeds, before the drive back step. The friendly fighter cannot be **driven back**, and makes an **Attack action** that must target the attacker.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B243",
			"name": "Eager Advance",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter and **push** them 1 hex. Place one Waaagh! counter on the chosen fighter's fighter card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B244",
			"name": "Kunnin' Brutality",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Attack action** (but not during a superaction). **Push** them up to 3 hexes.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B245",
			"name": "Power of the Waaagh!",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter and roll two magic dice. For each roll of :MagFocus:, **Heal** (1) the chosen fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B246",
			"name": "Waaagh! Energy",
			"faction": "Morgok's Krushas",
			"type": "Ploy",
			"glory": "-",
			"description": "Roll one magic dice for each surviving friendly fighter. On a roll of :MagChannel: place one Waaagh! counter on that fighter's fighter card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B247",
			"name": "Berserk Whirl",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's activation, **Scatter** 2 from this fighter's hex and **push** them 1 hex along the **chain**. If you cannot **push** this fighter into an **empty** hex, nothing happens.",
			"objectiveType": "-",
			"restrictions": "'Ardskull",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B248",
			"name": "Brute Charge",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "Rolls of :atSmash: and :atFury: are **successes** for this fighter's Range 1 **Attack actions** made as part of a **Charge action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B249",
			"name": "Brute Swing",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's Range 1 or Range 2 **Attack actions** have **Knockback** 1.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B250",
			"name": "Incredible Bellow",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Action:** Pick one: **push** all adjacent enemy fighters up to 2 hexes, or **push** all other friendly fighters up to 1 hex.",
			"objectiveType": "-",
			"restrictions": "Morgok",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B251",
			"name": "Inured to Pain",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter is **dealt** damage, reduce that damage by 1 (to a minimum of 1).",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B252",
			"name": "Keen Choppa",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's Range 1 **Attack actions** have **Cleave**.",
			"objectiveType": "-",
			"restrictions": "Morgok",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B253",
			"name": "Seething Hatred",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "You can **re-roll** any number of attack dice in the attack rolls for this fighter's **Attack actions** that target a fighter with a Wounds characteristic of 4 or more.",
			"objectiveType": "-",
			"restrictions": "Thugg",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B254",
			"name": "Vengeful Glare",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an **Attack action** that targeted this fighter, place one Waaagh! counter on this fighter's fighter card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B255",
			"name": "Vessel of the Waaagh!",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Action:** Place one Waaagh! counter on the fighter card of each friendly fighter within 2 hexes.",
			"objectiveType": "-",
			"restrictions": "'Ardskull",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B256",
			"name": "Waaagh! 'Eadbutt",
			"faction": "Morgok's Krushas",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n **Remove** any number of Waaagh! counters from this fighter's fighter card before making the attack roll. \\n +1 Damage to that **Attack action** for each counter **removed**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B257",
			"name": "Absolute Stillness",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* A friendly **Quarry** is holding an objective \\n *And:* That fighter has no Move or Charge tokens.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B258",
			"name": "Abundance of Caution",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation or power step if all surviving friendly fighters have one or more Guard tokens.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B259",
			"name": "Adaptive Strategy",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if you have scored 5 or more **hybrid** objective cards.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B260",
			"name": "Addicted to Power",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge:** Score this immediately after a friendly fighter is **dealt** damage by **backlash**, if that fighter is not taken out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B261",
			"name": "Against the Wall",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when an enemy fighter in an **edge** hex is taken out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B262",
			"name": "Aggressive Strategy",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if you have scored 5 or more **surge** objective cards.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B263",
			"name": "Ahead of the Hunt",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if there is at least one surviving friendly **Quarry**.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B264",
			"name": "Annihilation",
			"faction": "Universal",
			"type": "Objective",
			"glory": "5",
			"description": "Score this in an end phase if *all enemy fighters* are out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B265",
			"name": "Arcane Arrest",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly fighter's spell that **deals** damage to an enemy **Hunter** or **Quarry**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B266",
			"name": "Arcane Expertise",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an enemy fighter is **dealt** precisely enough damage to take them out of action by a friendly fighter's spell.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B267",
			"name": "Awesome Resilience",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Hybrid:** Score this in an end phase \\n *If:* Each surviving friendly fighter has no wound tokens \\n *Or:* You healed friendly fighters of 3 or more wound tokens in the previous phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B268",
			"name": "Beyond Mortal",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Hybrid:** Score this in an end phase \\n *If:* A friendly fighter has 4 or more wound tokens \\n *Or:* A surviving friendly fighter has a Move and/or Wounds characteristic or 8 or more.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B269",
			"name": "Blaze a Trail",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if each surviving friendly fighter is in enemy territory and adjacent to no enemy fighters.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B270",
			"name": "Brought to Bay",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge, Dual:** Score this immediately \\n *If:* A friendly **Hunter** makes an **Attack action** that takes an enemy fighter out of action \\n *And:* That enemy fighter was in enemy territory.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B271",
			"name": "Change of Fortunes",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately when a feature token is flipped in a hex that contains a friendly fighter.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B272",
			"name": "Committed",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Hybrid:** Score this in an end phase \\n *If:* Each surviving friendly fighter is adjacent to one or more enemy fighters \\n *Or:* One or more friendly fighters are each adjacent to three or more enemy fighters.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B273",
			"name": "Conquest",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in the third end phase if all surviving friendly fighters are *in your opponent's territory*.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B274",
			"name": "Coveted Spoils",
			"faction": "Universal",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in an end phase if all objectives are held.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B275",
			"name": "Denial",
			"faction": "Universal",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in the third end phase if there are no enemy fighters in your territory.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B276",
			"name": "Duck and Parry",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an **Attack action** that targets a friendly fighter with one or more Guard tokens fails.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B277",
			"name": "Dug In",
			"faction": "Universal",
			"type": "Objective",
			"glory": "4",
			"description": "**Dual:** Score this in an end phase \\n *If:* Your warband holds three or more objectives \\n **And:** Your warband held three or more objectives at the start of the round.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B278",
			"name": "Fateful Strike",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly fighter's successful **Attack action** that targets a fighter with a Defence characteristic of 2 or more.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B279",
			"name": "Feed the Beastgrave",
			"faction": "Universal",
			"type": "Objective",
			"glory": "5",
			"description": "Score this in an end phase if there are no objective tokens on the battlefield.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B280",
			"name": "Frantic Exchange",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a fifth or subsequent power card is played in the same power step.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B281",
			"name": "Gathered Momentum",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge, Hybrid:** Score this immediately \\n *If:* You score your second or subsequent **surge** objective card in a phase \\n *Or:* A friendly fighter makes a **Charge action** and ends that action five or more hexes from the hex in which they began the action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B282",
			"name": "Hidden Purpose",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if your warband holds two or more objectives.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B283",
			"name": "Hold Objective 1",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds objective *1*.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B284",
			"name": "Hold Objective 2",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds objective *2*.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B285",
			"name": "Hold Objective 3",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds objective *3*.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B286",
			"name": "Hold Objective 4",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds objective *4*.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B287",
			"name": "Hold Objective 5",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if your warband holds objective *5*.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B288",
			"name": "Master of Battle",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if one surviving friendly fighter took three or more actions in the previous phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B289",
			"name": "Master of Hazards",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after you flip a second or subsequent feature token in this phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B290",
			"name": "Master of Many Paths",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if there is a surviving friendly fighter who is a **leader**, a **wizard** and a **Hunter**.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B291",
			"name": "Master Poisoner",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "Score this in an end phase if you have played two or more **Poison** gambits.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B292",
			"name": "Meticulous Strategy",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if you have scored 3 or more **dual** objective cards.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B293",
			"name": "No One is Safe",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a second or subsequent enemy fighter is taken out of action by damage **dealt** by a gambit in this phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B294",
			"name": "Over My Dead Body",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an enemy fighter's **Attack action** that targets a friendly fighter, if the friendly fighter was holding an objective at the start of that action and is still holding that objective.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B295",
			"name": "Path to Victory",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* One or more enemy fighters were taken out of action in the previous phase \\n *And:* Your warband holds two or more objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B296",
			"name": "Perfect Match",
			"faction": "Universal",
			"type": "Objective",
			"glory": "4",
			"description": "Score this in an end phase if you have scored 10 or more objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B297",
			"name": "Rising Power",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly fighter **casts** a spell and you rolled three or more dice in the casting roll.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B298",
			"name": "Run Ragged",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if each surviving fighter has one or more Move and/or Charge tokens.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B299",
			"name": "Scrum",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after an activation if four or more fighters on the battlefield are in a single group in which each fighter is adjacent to at least one other fighter in that group.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B300",
			"name": "Set the Tempo",
			"faction": "Universal",
			"type": "Objective",
			"glory": "3",
			"description": "**Dual:** Score this in an end phase \\n *If:* You have scored 2 or more **dual** objective cards and 2 or more **hybrid** objective cards \\n *And:* You have scored 6 or more objective cards.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B301",
			"name": "Show of Force",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge, Hybrid:** Score this immediately after an activation \\n *If:* Three or more friendly fighters are in enemy territory \\n *Or:* One or more friendly fighters each have three or more upgrades.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B302",
			"name": "Skilled Duellist",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly fighter's successful **Attack action** made as a reaction to that fighter's **Attack action** with **Combo**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B303",
			"name": "Sorcerous Volley",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after the same friendly fighter's second or subsequent **spell Attack action** in a single phase that targets the same enemy fighter.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B304",
			"name": "Steady Assault",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after the same friendly fighter's third or subsequent **Attack action** in a single phase.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B305",
			"name": "Supremacy",
			"faction": "Universal",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in an end phase if your warband holds three or more objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B306",
			"name": "Swift Capture",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge, Dual:** Score this immediately after an activation \\n *If:* Your warband holds one or more objectives in friendly territory \\n *And:* Your warband holds one or more objectives in enemy territory.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B307",
			"name": "Team Effort",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Dual:** Score this in an end phase \\n *If:* There are two or more surviving friendly fighters \\n *And:* Each surviving friendly fighter made one or more actions in the previous phase.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B308",
			"name": "Temporary Victory",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge:** Score this immediately after an activation if your warband holds three or more objectives.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B309",
			"name": "Test of Courage",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if two or more friendly fighters are standing in **lethal** hexes.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B310",
			"name": "The Avatar Risen",
			"faction": "Universal",
			"type": "Objective",
			"glory": "3",
			"description": "Score this in an end phase if a surviving friendly fighter has the Avatar of the Ur-grub upgrade.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B311",
			"name": "The Beast is Slain",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly **Hunter's** **Attack action** that takes an enemy **leader** or enemy **Quarry** out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B312",
			"name": "The Great Hunt",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Hybrid:** Score this in an end phase \\n *If:* One or more friendly **Hunters** each have three or more upgrades \\n *Or:* Three or more friendly **Hunters** each have one or more upgrades.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B313",
			"name": "The Hunter Hunted",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Surge:** Score this immediately after a friendly **Quarry's Attack action** takes an enemy **Hunter** out of action.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B314",
			"name": "To the End",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in an end phase if there are no cards left in your power deck.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B315",
			"name": "Trading Blows",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge:** Score this immediately after a friendly fighter's **Attack action** made as a reaction during or immediately after an enemy fighter's **Attack action**.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B316",
			"name": "Triumphant Hunt",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "**Dual:** Score this in an end phase \\n *If:* Three or more enemy fighters are out of action \\n *And:* At least one enemy **Quarry** is out of action.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B317",
			"name": "Uncontested",
			"faction": "Universal",
			"type": "Objective",
			"glory": "3",
			"description": "**Dual:** Score this in an end phase \\n *If:* Your warband holds two or more objectives \\n *And:* No enemy fighters hold objectives.",
			"objectiveType": "End",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B318",
			"name": "Unexpected Pitfall",
			"faction": "Universal",
			"type": "Objective",
			"glory": "1",
			"description": "**Surge, Hybrid:** Score this immediately \\n *After:* An enemy fighter is taken out of action by a **lethal** hex \\n *Or:* An enemy fighter is taken out of action by damage **dealt** by a gambit you played.",
			"objectiveType": "Surge",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B319",
			"name": "Veteran Survivors",
			"faction": "Universal",
			"type": "Objective",
			"glory": "2",
			"description": "Score this in the third end phase if there are three or more surviving friendly **Hunters**.",
			"objectiveType": "Third",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B320",
			"name": "Beast Armour",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, you can **re-roll** one dice in the caster's defence rolls. This spell **persists** until the end of the round or until the caster is out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B321",
			"name": "Blind Hunger",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagChannel:):** If **cast**, pick one opponent and randomly determine one power card in their hand. That card is **discarded**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B322",
			"name": "Blindside",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during an **Attack action**, before the attack roll. **Push** one friendly fighter up to 2 hexes so that they are a **supporting** fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B323",
			"name": "Bloodscent",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "+2 Dice to the first **Attack action** in the next activation if the target has one or more wound tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B324",
			"name": "Buried Instinct",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during an **Attack action**, that targets a friendly fighter, before the attack roll. **Give** that friendly fighter one Guard token. If that friendly fighter is **Quarry**, you can also **re-roll** 1 dice in the defence roll for that **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B325",
			"name": "Chain Attack",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "The first **Attack action** made by a friendly fighter in the next activation has **Combo**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B326",
			"name": "Cloaked in Shadow",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** a fighter. Until the end of the next activation, that fighter is a **Quarry**, players cannot **choose** that fighter when a gambit is played, and that fighter cannot be **dealt** damage by gambits.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B327",
			"name": "Closing Jaws",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Play this only in a power step following your activation. At the end of the next activation, **choose** one enemy fighter in an **edge** hex. The chosen fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B328",
			"name": "Collapse",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick three **edge** hexes in a single group with each hex in the group adjacent to at least one other hex in the group, and all in one player's territory. Each fighter in a hex you picked is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B329",
			"name": "Confusion",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** two fighters that are adjacent to each other. **Place** each fighter in the hex that was occupied by the other fighter when you **chose** them.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B330",
			"name": "Crushing Charge",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "In the next activation, you can take the following reaction once. \\n **Reaction:** After a friendly fighter's **Move action** made as part of a **Charge action**, roll one attack dice for each enemy fighter adjacent to that fighter. For each roll of :atSmash: that enemy fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B331",
			"name": "Dangerous Prize",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one objective token in an **empty** hex. The first fighter to move into, be **pushed** into or be **placed** in the same hex as that objective token in the next activation is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B332",
			"name": "Desperate Flight",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter and **Scatter** 4 from that fighter's hex. **Push** that fighter 3 hexes along the **chain**. If a hex that fighter would be **pushed** into is **blocked** or **occupied**, do not **push** that fighter any further.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B333",
			"name": "Downwind",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Push** one friendly **Hunter** 1 hex closer to an enemy fighter. That enemy fighter is a **Quarry**. This effect persists until that enemy fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B334",
			"name": "Dragged into the Darkness",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one enemy fighter that has one or more Move tokens. The chosen fighter is **dealt** 1 damage if that damage would take the chosen fighter out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B335",
			"name": "Dulling Dart",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n **Choose** one enemy fighter adjacent to one or more friendly fighters. -1 Dice (to a minimum of 1) from that enemy fighter's **Attack actions**. This effect **persists** until the end of the round or the enemy fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B336",
			"name": "Eldritch Haze",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, the caster has +1 Defence. This spell **persists** until the end of the round or until the caster is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B337",
			"name": "Euphoric Dust",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n **Choose** one enemy fighter adjacent to one or more friendly fighters. \\n -1 Defence from that enemy fighter (to a minimum of 1) until the next power step.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B338",
			"name": "Exhaustion",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Play this only in a power step following your activation. At the end of the next activation, **choose** one enemy fighter that made two or more actions in that activation. The chosen fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B339",
			"name": "Fate's Decree",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after an opponent makes a roll as instructed by a gambit or upgrade (but not during an **Attack action**), before the effect of the roll is resolved. The opponent must **re-roll** that roll.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B340",
			"name": "Flash of Foresight",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one: \\n Pick one objective card in an opponent's hand. That opponent must reveal that card to you. \\n Or: \\n Look at the top card of your power or objective deck (without revealing it) and then put it back.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B341",
			"name": "Frenzied Search",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Play this only if your warband holds one or more objectives. **Discard** one power card. If you do, **draw** up to three power cards.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B342",
			"name": "Glorious Triumph",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Attack action** that takes an adjacent enemy fighter out of action. Your warband is considered to hold one more objective than it holds. This effect **persists** until that friendly fighter is taken out of action or until the start of the next round.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B343",
			"name": "Go to Ground",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter with no Move or Charge tokens. **Place** the chosen fighter on a **starting** hex in your territory, or if that fighter is a **Quarry**, **place** them on any hex in your territory instead. **Give** the chosen fighter one Charge token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B344",
			"name": "Headlong Flight",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Move for the first fighter to make a **Move action** in the next activation. +2 Move instead if that fighter is a **Quarry**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B345",
			"name": "Honest Scrap",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Players cannot **re-roll** dice until the end of the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B346",
			"name": "Hostile Ground",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one enemy fighter in your territory that is on or adjacent to one or more **lethal** hexes. That fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B347",
			"name": "Hunt as a Pack",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "In the first **Attack action** made by a friendly fighter in the next activation, each friendly **supporting** fighter is considered to be two **supporting** fighters.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B348",
			"name": "Hunting Band",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly **Hunter** and any number of adjacent friendly **Hunters**. **Give** each chosen fighter one Guard token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B349",
			"name": "Hunting Bolt",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, **choose** one enemy fighter within 3 hexes of the caster. That fighter is **dealt** 1 damage, or 2 damage if it is a **Quarry**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B350",
			"name": "Invert Terrain",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus:):** If **cast**, pick one feature token within five hexes of the caster. Flip that token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B351",
			"name": "Irresistible Vision",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus::MagFocus:):** If **cast**, **push** each other fighter within 2 hexes of the caster up to 1 hex, or up to 2 hexes if that other fighter is a **Hunter**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B352",
			"name": "Leadbone Dust",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n **Choose** one enemy fighter adjacent to one or more friendly fighters. **Give** the chosen fighter one Move token. In addition, **Attack actions** that target the chosen fighter have **Ensnare**. This effect **persists** until the chosen fighter is taken out of action, or the end of the round.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B353",
			"name": "Leave Nothing to Chance",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one feature token in a hex that contains a friendly fighter. **Remove** that token from the battlefield.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B354",
			"name": "Lucky Escape",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this when a friendly fighter is **dealt** 1 damage precisely. That damage is not **dealt** to them.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B355",
			"name": "Madness Dart",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n **Choose** one enemy fighter adjacent to one or more friendly fighters. The chosen fighter's **Attack actions** have the :atFury: characteristic instead of their printed characteristic. This effect **persists** until the chosen fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B356",
			"name": "Malkyn Grace",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter to have the following: \\n +2 Move \\n -1 Wounds (to a minimum of 1) \\n This effect **persists** until the end of the round or that fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B357",
			"name": "Marked",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** a fighter. They are a **Quarry**. This **persists** until that fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B358",
			"name": "Mass Upheaval",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Gambit Spell (:MagFocus::MagFocus:):** If **cast**, roll one magic dice for each feature token in the same players territory as the caster. For each roll of :MagChannel:, flip that token. If the caster is in no one's territory, this spell fails.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B359",
			"name": "Nightmare in the Shadows",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one enemy fighter and **push** them 1 hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B360",
			"name": "Overkill",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after a friendly fighter's **Attack action** that took an enemy fighter out of action, if the **Attack action dealt** more damage than was necessary to take the target out of action. Gain 1 spent glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B361",
			"name": "Punch-drunk",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during a friendly fighter's Range 1 or Range 2 **Attack action** that succeeds, before the drive back step. Instead of driving the target back, **Scatter** 3 from the target's hex and **push** them along the **chain** to the **end hex**. You cannot **push** them into a **blocked** or **occupied** hex. The target cannot be **trapped**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B362",
			"name": "Quick Search",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Play this only if your warband holds one or more objectives. **Draw** up to 2 power cards.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B363",
			"name": "Restless Prize",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one objective token and move it into an adjacent hex up to two times. You cannot move it into a **lethal** hex or a hex that includes a feature token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B364",
			"name": "Rocksnake Toxin",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n **Choose** one enemy fighter adjacent to one or more friendly fighters. The chosen fighter is **dealt** 1 damage at the end of each action phase. This effect **persists** until the chosen fighter is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B365",
			"name": "Scavenged Defences",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** one friendly fighter. \\n +1 Defence to the chosen fighter in the first **Attack action** in the next activation.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B366",
			"name": "Sidestep",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Choose** a friendly fighter and **push** them one hex.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B367",
			"name": "Sitting Target",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "The first **Attack action** made by a friendly fighter in the next activation has +1 Dice and **Ensnare** if the target has no Move or Charge tokens.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B368",
			"name": "Snare",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this during a friendly **Hunter's Attack action**, after it **drives back** an enemy fighter. The enemy fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B369",
			"name": "Spinetoad Toxin",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Poison** \\n Choose one enemy fighter adjacent to one or more friendly fighters. The enemy fighter is **dealt** 1 damage after each **Move action** they make. This effect **persists** until the enemy fighter is out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B370",
			"name": "Spiteful Dart",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Reaction:** Play this after an enemy fighter's **Attack action** that drives a friendly fighter back, if the friendly fighter is not taken out of action. The enemy fighter is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B371",
			"name": "Sudden Scarcity",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "The next time an opponent spends any glory points to give a fighter an upgrade, they must spend 1 additional glory point to do so. This effect **persists** until the end of the phase.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B372",
			"name": "The Ground Shifts",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one **lethal** hex token and **push** it 1 hex into an **empty** hex that is not a **lethal** hex and does not contain a feature token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B373",
			"name": "Tracking",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Move to the first fighter to make a **Move action** in the next activation. +2 Move instead if that fighter is a **Hunter**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B374",
			"name": "Unexpected Peril",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "Pick one feature token in an **empty** hex in your territory. Flip that token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B375",
			"name": "Unnatural Truce",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Draw** up to two power cards. Each other player **draws** up to one power card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B376",
			"name": "Vicious Beast",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "**Place** the scatter token on a **lethal** hex, then do the following twice. **Scatter 1** from that hex: any fighter in the **end hex** is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B377",
			"name": "Victimise",
			"faction": "Universal",
			"type": "Ploy",
			"glory": "-",
			"description": "+1 Dice to the first Range 1 or Range 2 **Attack action** made by a friendly fighter in the next activation. If that **Attack action** targets a **Quarry** you can **re-roll** any number of attack dice in the attack roll for that **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B378",
			"name": "Wildform",
			"faction": "Universal",
			"type": "Spell",
			"glory": "-",
			"description": "**Spell:** This spell is **cast** if there are two or more of the same symbol in the casting roll. If this spell is **cast**, +1 Damage to the caster's Range 1 and Range 2 **Attack actions**, and they gain one or more of the following, corresponding to the symbols in the roll. \\n **2+** :MagChannel: : +1 Move \\n **2+** :MagFocus: : +1 Wounds \\n **2+** :MagCrit: : +1 Defence \\n This spell **persists** until the caster is taken out of action.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B379",
			"name": "Abasoth's Auto-immolation",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Lost Page** \\n **Spell Reaction (:MagFocus:):** Use this during an enemy fighter's Range 1 **Attack action** that **deals** enough damage to take this fighter out of action, after the deal damage step. If **cast**, roll a number of attack dice equal to this fighter's Wounds characteristic. **Deal** 1 damage to their attacker for each roll of :atSmash: or :atCrit:.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B380",
			"name": "Amberbone Axe",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 3 - :atSmash: 2 - :boom: 1] \\n After this fighter makes this **Attack action**, **discard** this card. \\n [:Hex: 1 - :atSmash: 2 - :boom: 2] If this **Attack action** takes an enemy fighter out of action, **discard** this card and gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B381",
			"name": "Amberbone Dagger",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 2] \\n If there are one or more :atCrit: in the attack roll, this **Attack action** has **Cleave**. If this **Attack action** takes an enemy fighter out of action, **discard** this card and gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B382",
			"name": "Amberbone Hammer",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2 -(Knockback 1)-] \\n If this **Attack action** takes an enemy fighter out of action, **discard** this card and gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B383",
			"name": "Amberbone Mace",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n You can **re-roll** any number of dice in the attack roll. If this **Attack action** takes an enemy fighter out of action, **discard** this card and gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B384",
			"name": "Amberbone Spear",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 2 - :atSmash: 2 - :boom: 2] \\n If this **Attack action** takes an enemy fighter out of action, **discard** this card and gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B385",
			"name": "Amberbone Sword",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 3 - :boom: 2] \\n If this **Attack action** takes an enemy fighter out of action, **discard** this card and gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B386",
			"name": "Avatar of the Ur-grub",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This card cannot be included in your deck. \\n This card cannot be removed from this fighter. \\n This fighter is a **Quarry**. \\n This fighter's Range 1 and Range 2 **Attack actions** have +1 Damage and **Ensnare**. \\n **Reaction:** After this fighter's successful Range 1 or Range 2 **Attack action**, **Heal** (1) this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B387",
			"name": "Barb-laden Net",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 2 - :atFury: 3 - :boom: 1] \\n If this **Attack action** is successful, **give** the target one Charge token and **discard** this card.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B388",
			"name": "Binding Chain",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2 -(Combo)-] ",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B389",
			"name": "Bloodthief",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n **Reaction:** After this **Attack action**, if it succeeded, **Heal** (2) this fighter and **discard** this card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B390",
			"name": "Bloody Axe",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 2] \\n If this fighter has 2 or more wound tokens, double the Damage characteristic of this **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B391",
			"name": "Caltrops",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** During a Range 1 **Attack action**, after this fighter is **driven back**, but before they are **dealt** damage by any **lethal** hexes, their attacker is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B392",
			"name": "Claws of the Ur-grub",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Ur-grub Aspect** \\n This fighter's Range 1 **Attack actions** have **Ensnare**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B393",
			"name": "Cryptic Companion",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Quarry**. If this fighter is a **Quarry** and is holding an objective at the end of an action phase, gain 1 glory point.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B394",
			"name": "Cursed Blade",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 3] \\n +1 Move \\n You must activate this fighter in your first activation each round. At the start of this fighter's activation, **deal** 1 damage to them. After their activation, **give** them one Charge token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B395",
			"name": "Finishing Blow",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n **Reaction:** After this fighter's successful **Attack action** with **Combo**, make this **Attack action**. It must target the same fighter. +2 Damage to this **Attack action** when made in this way.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B396",
			"name": "Great Fortitude",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Wounds.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B397",
			"name": "Great Speed",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Move.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B398",
			"name": "Great Strength",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Damage to this fighter's Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B399",
			"name": "Greedy Gauntlet",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's activation, **deal** 1 damage to this fighter and place one Sacrifice counter on this card. +1 Damage to this fighter's Range 1 or Range 2 **Attack actions** for each Sacrifice counter on this card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B400",
			"name": "Hidden Presence",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Quarry**. If this fighter is a **Quarry**, players cannot **choose** this fighter when a gambit is played.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B401",
			"name": "Hungry Realmstone",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an activation, place one Potency counter on this card and lose one glory point. \\n +1 Damage to this fighter's Range 1 and Range 2 **Attack actions** for each Potency counter on this card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B402",
			"name": "Hunter's Caution",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Hunter**. If this fighter is the target of a **Quarry's Attack action**, you can **re-roll** one dice in the defence roll.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B403",
			"name": "Hunter's Reflexes",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Hunter**. \\n **Reaction:** Use this after an enemy fighter's activation, if that fighter is a **Quarry**. **Push** this fighter 1 hex closer to that enemy fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B404",
			"name": "Hunter's Talisman",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Dice to this fighter's **Attack actions**. If the target is a **Quarry**, you can **re-roll** one attack dice in the attack roll.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B405",
			"name": "Hunter's Will",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After a **Quarry** moves or is **pushed** from an adjacent hex, **push** this fighter by the shortest route so that they are adjacent to that **Quarry**. If you cannot, this fighter is not **pushed**.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B406",
			"name": "Hunting Companion",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** During this fighter's successful Range 1 or Range 2 **Attack action** in which you rolled one or more :atSup2: in the attack roll, after the deal damage step, the target is **dealt** 1 damage.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B407",
			"name": "Iara's Instant Shield",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Lost Page** \\n **Spell Reaction (:MagFocus:):** Use this during an **Attack action** that targets this fighter, after the attack roll. If **cast**, you can **re-roll** any number of dice in the defence roll for that **Attack action**.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B408",
			"name": "Inescapable Blow",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n **Reaction:** After this fighter's successful **Attack action** with **Combo**, make this **Attack action**. It must target the same fighter and has **Cleave** and **Ensnare**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B409",
			"name": "Jared's Spirited Sphere",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Lost page** \\n [:Hex: 3 - :MagFocus: - - :boom: 1 -(Ensnare)-]",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B410",
			"name": "Keila's Choking Coil",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "*(Errata update)* The Grievous 1 keyword replaces the similar ability on this card. \\n **Lost page** \\n [:Hex: 3 - :MagFocus: - - :boom: 1] \\n On a **critical hit**, this **Attack action** has +1 Damage.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B411",
			"name": "Larval Lance",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 2 - :atSmash: - - :boom: -] \\n This **Attack action's** Dice and Damage characteristics are equal to the current round number (e.g. 1 in the first round). They cannot be modified.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B412",
			"name": "Lethal Snares",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter ends a **push** or a **Move action** in a hex that contains a feature token, or is **placed** in a hex that contains a feature token, flip that token.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B413",
			"name": "Mandibles of the Ur-grub",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Ur-grub Aspect** \\n **Reaction:** After this fighter's successful Range 1 **Attack action**, **Heal (1)** this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B414",
			"name": "Mazzig's Many Legs",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Lost Page** \\n **Spell action (:MagChannel:):** If **cast**, **choose** another friendly fighter within 2 hexes of the caster. **Push** the chosen fighter up to 2 hexes.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B415",
			"name": "Opening Strike",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 3 - :boom: 1 -(Combo)-]",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B416",
			"name": "Predator's Trinket",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Quarry**. If this fighter is a **Quarry**, this fighter's Range 1 or Range 2 **Attack actions** have **Cleave**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B417",
			"name": "Predatory Instinct",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Hunter**. You can **re-roll** one dice in the attack rolls for this fighter's **Attack actions** that target a **Quarry**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Beastgrave core set"
		},
		{
			"id": "B418",
			"name": "Prescient Blow",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atFury: 1 - :boom: 1 -(Combo)-] \\n This **Attack action's** Dice characteristic cannot be modified. \\n **Reaction:** During an **Attack action** that targets this fighter, before the attack roll, make this **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B419",
			"name": "Prey's Cunning",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Quarry**. If this fighter is a **Quarry**, this fighter cannot be **dealt** damage by Gambits.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B420",
			"name": "Quintok's Combative Cantrip",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Lost Page** \\n **Spell Action (:MagFocus:):** If **cast**, **push** one adjacent enemy fighter up to 1 hex, then **give** the caster one Guard token, then **push** the caster up to 1 hex.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B421",
			"name": "Repeating Mirror",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an enemy **wizard casts** a spell (other than a **spell Attack action**), and that spell is resolved, resolve that spell again with the same casting roll result, but do so as if this fighter was the caster and a **wizard**. Then **discard** this card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B422",
			"name": "Shadeglass Band",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "If there are one or more :atCrit: in this fighter's attack roll, place a Potency counter on this card. While there are one or more Potency counters on this card, you can **re-roll** one dice in this fighter's attack and defence rolls.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B423",
			"name": "Soothing Companion",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's activation, unless this fighter made one or more **Attack actions** in that activation, **Heal** (1) this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B424",
			"name": "Soulward Shard",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After an enemy **wizard casts** a spell, before it is resolved, pick one: this fighter is **dealt** 1 damage and the spell is not resolved, or this fighter is not **dealt** damage when the spell is resolved. Then **discard** this card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B425",
			"name": "Sprinting Charm",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Move in round 1 \\n +2 Move in round 2 \\n -1 Move (to a minimum of 0) in round 3.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B426",
			"name": "Stealthy Blade",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n Players cannot use reactions during this **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B427",
			"name": "Sting of the Ur-Grub",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Ur-grub Aspect** \\n +1 Damage to this fighter's Range 1 **Attack actions**. \\n If this fighter has three or more **Ur-grub Aspects**, remove those cards from the game (they do not go into a discard pile) and **give** the Avatar of the Ur-grub upgrade to this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Rippa's Snarlfangs expansion"
		},
		{
			"id": "B428",
			"name": "Stoneform",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "-1 Move (to a minimum of 0). \\n This fighter is a **Quarry**. If this fighter is a **Quarry**, this fighter cannot be **pushed**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B429",
			"name": "Strength of Terror",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Quarry**. If this fighter is a **Quarry**, +1 Dice to this fighter's Range 1 and Range 2 **Attack actions**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		},
		{
			"id": "B430",
			"name": "Substance Siphon",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter's Defence characteristic is :dfDodge: X where X is the round number. Their Defence characteristic cannot be modified, and you cannot **re-roll** dice in the defence roll when this fighter is the target of an **Attack action**.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B431",
			"name": "Survival Instincts",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Quarry**. If this fighter is a **Quarry**, this fighter is on Guard.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B432",
			"name": "Terrifying Aura",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is not and cannot be a **Quarry**. In addition, opponents cannot **re-roll** dice in attack rolls for **Attack actions** that target this fighter.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B433",
			"name": "The Scattered Tome",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "If this fighter is surviving at the end of the third action phase, gain 1 glory point for each **Lost Page** upgrade this fighter has.",
			"objectiveType": "-",
			"restrictions": "Wizard",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B434",
			"name": "Trophy Belt",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "Gain 1 spent glory point when this fighter's **Attack action** takes an adjacent enemy fighter out of action. Gain 1 unspent glory point instead if the target was a **Quarry**.",
			"objectiveType": "-",
			"restrictions": "Hunter",
			"set": "The Grymwatch expansion"
		},
		{
			"id": "B435",
			"name": "Victor's Experience",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "This fighter is a **Hunter**. \\n **Reaction:** After a friendly fighter's **Attack action** that takes an enemy fighter out of action, if this card is in your hand, give this upgrade to that fighter. This does not cost any glory points.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "The Wurmspat expansion"
		},
		{
			"id": "B436",
			"name": "Victor's Speed",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "+1 Move \\n **Reaction:** After a friendly fighter's **Attack action** that takes an enemy fighter out of action, if this card is in your hand, give this upgrade to that fighter. This does not cost any glory points.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Hrothgorn's Mantrappers expansion"
		},
		{
			"id": "B437",
			"name": "Vortex Stone",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "**Reaction:** After this fighter's activation, **choose** an enemy fighter within 3 hexes and **push** the chosen fighter up to 2 hexes. This **push** must bring the chosen fighter closer to this fighter each time the chosen fighter leaves a hex. Then **discard** this card.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgwaeth's Blade-coven expansion"
		},
		{
			"id": "B438",
			"name": "Warding Companion",
			"faction": "Universal",
			"type": "Upgrade",
			"glory": "-",
			"description": "When this fighter is the target of an **Attack action**, they are considered to have one more **supporting** fighter than they do.",
			"objectiveType": "-",
			"restrictions": "-",
			"set": "Morgok's Krushas expansion"
		}
	],
	"Arena Mortis": [
        {
            "id": "A1",
            "name": "A Risky Prospect",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Choose** one friendly fighter and roll three magic dice. For each roll of :MagCrit:, gain 1 glory point. For each roll of :MagChannel:, **deal** 1 damage to the chosen fighter.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A2",
            "name": "At Any Cost",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "Spend three glory points. If you do, **choose** one friendly fighter with no Charge or Move tokens. That fighter makes a **Charge action**.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A3",
            "name": "Bitter Memories",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "*(Errata update)* Roll two attack dice. If you roll one or more :atSmash:, **choose** a friendly fighter with one or more Raise counters. The chosen fighter makes one **Attack action**.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A4",
            "name": "Cold Fury",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after you place a Raise counter on a friendly fighter's fighter card. \\n +1 Damage and you can **re-roll** one attack dice in the attack roll for that fighter's next Range 1 or Range 2 **Attack action**. This effect **persists** until that fighter is taken out of action or until they make an **Attack action**.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A5",
            "name": "Distracting Wealth",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this during a friendly fighter's **Attack action**, after the determine success step. Spend two glory points. If you do, +1 Damage to that **Attack action**.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A6",
            "name": "Divine Reward",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after a friendly fighter's **Attack action** that took one or more enemy fighters out of action. Pick an upgrade from your hand and give that friendly fighter that upgrade. That upgrade does not cost any glory points.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A7",
            "name": "Enhanced Blow",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "Spend up to two glory points. If you do, +1 Dice to the first **Attack action** in the next activation for each glory point spent.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A8",
            "name": "Fancy Footwork",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after a friendly fighter's **Attack action** with **Combo** succeeds. **Draw** three power cards.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A9",
            "name": "Fractured Memories",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "-1 Defence (to a minimum of 1) from enemy fighters' defence rolls in the first **Attack action** in the next activation.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A10",
            "name": "Grand Offering",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after a friendly fighter's **Attack action** that took one or more enemy fighters out of action. Spend 1 glory point. If you do, gain 1 spent glory point.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A11",
            "name": "Invigorating Return",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after you place a Raise counter on a friendly fighter's fighter card. \\n **Push** that fighter up to 2 hexes.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A12",
            "name": "Last Gasp",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this when there are enough wound tokens on a friendly fighter's fighter card for them to be taken out of action, but before they are taken out of action. **Choose** one enemy fighter within 3 hexes of that friendly fighter. **Deal** 1 damage to the chosen fighter.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A13",
            "name": "Making Ends Meet",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "Pick one of your spent glory points and turn it over to its unspent side.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A14",
            "name": "Outrageous Fortune",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after a friendly fighter is **dealt** damage in the deal damage step. Pick one of that fighter's upgrades and **discard** it. If you do, reduce that damage by 1 to a minimum of 1.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A15",
            "name": "Revel in Death",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after you place a Raise counter on a friendly fighter's fighter card. Roll two magic dice. If you roll one or more :MagChannel:, gain 1 glory point.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A16",
            "name": "Shattering Howl",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this when there are enough wound tokens on a friendly fighter's fighter card for them to be taken out of action, but before they are taken out of action. **Choose** one enemy fighter within 3 hexes of that friendly fighter and pick one of the chosen fighter's upgrades. **Discard** that upgrade.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A17",
            "name": "Soulsurge",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after a friendly fighter's **Attack action** that took one or more enemy fighters out of action. **Choose** one friendly fighter. Roll one magic dice. On a :MagChannel: that friendly fighter makes one **Attack action**.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A18",
            "name": "Strength from Death",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Reaction:** Play this after you place a Raise counter on a friendly fighter's fighter card. \\n That fighter's Range 1 or Range 2 **Attack actions** have **Cleave** and **Ensnare**. This effect **persists** until that fighter is taken out of action or until after they make an **Attack action**.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A19",
            "name": "The Old One-Two",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "+1 Dice to the first Range 1 or Range 2 **Attack action** with **Combo** in the next activation. \\n +1 Dice to the first **Attack action** made as a reaction to an **Attack action** with **Combo**. This effect **persists** until the next power step.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A20",
            "name": "Winded",
            "faction": "Universal",
            "type": "Ploy",
            "glory": "-",
            "description": "**Choose** one friendly fighter that has one or more upgrades with **Combo**, and one enemy fighter adjacent to that fighter. Then spend 1 glory point. If you do **give** the chosen enemy fighter one Charge token.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A21",
            "name": "Ambusher",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Reaction:** After you place a Raise counter on this fighter's fighter card, remove this fighter from the battlefield and **place** them in an **empty** hex. Then **discard** this upgrade. \\n **Reaction:** Before a friendly fighter would be taken out of action, if this card is in your hand, give this upgrade to that fighter. This does not cost a glory point.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A22",
            "name": "Audacious Feint",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 1 - :atSmash: 4 - :boom: 1 -(Combo)-] \\n This **Attack action's** Damage characteristic cannot be modified. After this **Attack action**, **give** this fighter one Guard token.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A23",
            "name": "Deserved Confidence",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "This fighter has the following cumulative benefits, depending on how many upgrades they have: \\n **3+:** +1 Wound and this fighter cannot be **driven back**. \\n **5+:** +1 Move \\n **9+:** This fighter's **Attack actions** have **Innate** (:atFury: :atSmash:).",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A24",
            "name": "Desperate Swing",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 1 - :atFury: 2 - :boom: 2 -(Combo)-] \\n If any opponent has more glory points than you, this **Attack action** has +2 Dice.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A25",
            "name": "Draining Leech",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 3 - :atFury: 3 - :boom: 1] \\n This **Attack action's** Damage characteristic cannot be modified. \\n After this fighter makes this **Attack action**, **discard** this upgrade. \\n **Reaction:** After the deal damage step, pick one of the target's upgrades. **Discard** that upgrade.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A26",
            "name": "Flashy Follow-up",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n **Reaction:** After this fighter's successful **Attack action** with **Combo**, make this **Attack action**. It must target the same fighter. When made in this way, this **Attack action** has +1 Dice and +1 Damage.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A27",
            "name": "Frenzied Assault",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 1 - :atFury: 1 - :boom: 1] \\n This **Attack action's** Damage characteristic cannot be modified. \\n **Reaction:** After this fighter successfully makes this **Attack action**, they make this **Attack action**. It must target the same fighter.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A28",
            "name": "Gauntlet of Command",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Mortis Relic** \\n If this fighter has two or more **Mortis Relics**, +1 Wounds. \\n **Reaction:** After this fighter's activation, spend 1 glory point. If you do, **push** one friendly fighter 1 hex.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A29",
            "name": "Gauntlet of Dominance",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Mortis Relic** \\n If this fighter has two or more **Mortis Relics**, +1 Damage to this fighter's Range 1 and Range 2 **Attack actions**. \\n **Reaction:** After this fighter's activation, spend 1 glory point. If you do, **push** one enemy fighter 1 hex.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A30",
            "name": "Gravesiren",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Reaction:** After you place a Raise counter on this fighter's fighter card, **push** one enemy fighter 1 hex. \\n **Reaction:** Before a friendly fighter would be taken out of action, if this card is in your hand, give this upgrade to that fighter. This does not cost a glory point.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A31",
            "name": "Head Bash",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 1 - :atSmash: 2 - :boom: 2] \\n **Reaction:** After this fighter's successful **Attack action** with **Combo**, make this **Attack action**. It must target the same fighter. When made in this way, if this **Attack action** is successful, **give** the target one Charge token.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A32",
            "name": "Heart Thief",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 4 - :atFury: 2 - :boom: 1] \\n +1 Damage if the target has a greater Wounds characteristic than this fighter.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A33",
            "name": "Hungry for Vengeance",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "If this fighter has one or more Raise counters on their fighter card, +1 Dice to this fighter's Range 1 and Range 2 **Attack actions**. \\n **Reaction:** Before a friendly fighter would be taken out of action, if this card is in your hand, give this upgrade to that fighter. This does not cost a glory point.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A34",
            "name": "Ignoble Blow",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 1 - :atFury: 3 - :boom: 2 -(Combo)-] \\n In the determine success step, if you rolled the same total of **critical successes** and **successes** as the target's player (and at least one **success**), add 1 **success** to your total.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A35",
            "name": "Invigor Mortis",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Reaction:** After you place a Raise counter on this fighter's fighter card, **deal** 1 damage to each adjacent enemy fighter.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A36",
            "name": "Spiteful Lunge",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Reaction:** When there are enough wound tokens on this fighter's fighter card for them to be taken out of action, but before they are taken out of action, roll one attack dice. On a :atCrit:, **Choose** one enemy fighter within 3 hexes of this fighter. That enemy fighter is taken out of action.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A37",
            "name": "The Crown of the Dead",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Mortis Relic** \\n If this fighter has two or more **Mortis Relics**, you can **re-roll** one attack dice in this fighter's attack rolls. \\n **Reaction:** After this fighter's activation, spend 1 glory point. If you do, **draw** two power cards and then **discard** one power card.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A38",
            "name": "Tight Defence",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Reaction:** After the declare Attack action step, if this fighter was declared as the target of a Range 1 or Range 2 **Attack action**, **give** this fighter one Guard token.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A39",
            "name": "Vision of Glory",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "**Reaction:** After an activation, spend 1 glory point. If you do, **remove** one Move token or one Charge token from this fighter. Then **discard** this upgrade.",
            "objectiveType": "-",
            "restrictions": "-",
            "set": "Arena Mortis expansion"
        },
        {
            "id": "A40",
            "name": "Weirding Staff",
            "faction": "Universal",
            "type": "Upgrade",
            "glory": "-",
            "description": "[:Hex: 2 - :atFury: 2 - :boom: 2] \\n **Reaction:** During the deal damage step, spend 2 glory points. If you do, add this fighter's wizard level to this **Attack action's** Damage characteristic.",
            "objectiveType": "-",
            "restrictions": "Wizard",
            "set": "Arena Mortis expansion"
        }
    ]
};

const fighters = {
	"Beastgrave": [
		{
			"id": "Morgok1",
			"name": "Morgok",
			"faction": "Morgok's Krushas",
			"type": "Character",
			"leader": true,
			"stats": ":Hex: 3 - :Shield: 1 - :Health: 5",
			"weapons": "**Boss Choppas**\\n[:Hex: 1 - :atSmash: 2 - :boom: 3]",
			"description": "After this fighter's activation in which they made one or more **Attack actions**, place one Waaagh! counter on this card.\\n**Action:** remove one Waaagh! counter from this card, then push each friendly fighter up to 2 hexes.",
			"inspire": "There are two or more Waaagh! counters on this card.",
			"inspired": {
				"name": "Morgok Inspired",
				"description": "After this fighter's activation in which they made one or more **Attack actions**, place one Waaagh! counter on this card.\\n**Boss Choppas**\\nYou can re-roll one attack dice in the attack roll for this **Attack action**.\\n**Action:** remove one Waaagh! counter from this card, then push each friendly fighter up to 2 hexes.",
				"stats": ":Hex: 4 - :Shield: 1 - :Health: 5",
				"weapons": "**Boss Choppas**\\n[:Hex: 1 - :atFury: 3 - :boom: 3]",
			}
		},
		{
			"id": "Morgok2",
			"name": "Thugg",
			"faction": "Morgok's Krushas",
			"type": "Character",
			"stats": ":Hex: 3 - :Shield: 1 - :Health: 5",
			"weapons": "**Smashas**\\n[:Hex: 1 - :atFury: 3 - :boom: 2]",
			"description": "After this fighter's activation in which they made one or more **Attack actions**, place one Waaagh! counter on this card.",
			"inspire": "There are two or more Waaagh! counters on this card.",
			"inspired": {
				"name": "Thugg Inspired",
				"description": "After this fighter's activation in which they made one or more **Attack actions**, place one Waaagh! counter on this card.\\n**Smashas**\\nRemove any number of Waaagh! counters from this card before making the attack roll: that **Attack action** has **+1 dice** for each counter you remove.",
				"stats": ":Hex: 4 - :Shield: 1 - :Health: 5",
			}
		},
		{
			"id": "Morgok3",
			"name": "'Ardskull",
			"faction": "Morgok's Krushas",
			"type": "Character",
			"stats": ":Hex: 3 - :Shield: 1 - :Health: 5",
			"weapons": "**Gore-basha**\\n[:Hex: 1 - :atFury: 2 - :boom: 3]",
			"description": "After this fighter's activation in which they made one or more **Attack actions**, place one Waaagh! counter on this card.",
			"inspire": "There are two or more Waaagh! counters on this card.",
			"inspired": {
				"name": "'Ardskull Inspired",
				"description": "After this fighter's activation in which they made one or more **Attack actions**, place one Waaagh! counter on this card.\\n**Gore-basha**\\nRemove any number of Waaagh! counters from this card before making the attack roll: that **Attack action** has **+1 damage** for each counter you remove.",
				"stats": ":Hex: 4 - :Shield: 1 - :Health: 5",
				"weapons": "**Gore-basha**\\n[:Hex: 1 - :atFury: 3 - :boom: 3]\\n**Frenzied whirl**\\n[:Hex: 1 - :atFury: 2 - :boom: 2]\\nscything",
			}
		}
	]
};

const decks = {
	"entities": [
		{
			"id": "deck1",
			"editable": {
				"type": "Deck",
				"name": "Morgok starter",
				"comment": "This band of three orks means melee fight. Only needs some time to get to an opponent with their short feet.\nChanged 1 upgrade to something fancier.",
				"characters": ["Morgok1", "Morgok2", "Morgok3"],
				"objectives": ["B225", "B226", "B227","B228", "B229", "B230", "B231", "B232", "B233", "B234", "B235", "B236"],
				"gambits": ["B237", "B238", "B239", "B240", "B241", "B242", "B243", "B244", "B245", "B246"],
				"upgrades": ["B247", "B248", "B250", "B251", "B252", "B253", "B254", "B255", "B256", "B389"]
			},
			"version": 2
		}
	],
	"history": [
		{
			"id": 1,
			"changedFrom": {},
			"entityId": "deck1",
			"changedTo": {
				"type": "Deck",
				"name": "Morgok starter",
				"comment": "This band of three orks means melee fight. Only needs some time to get to an opponent with their short feet.",
				"characters": ["Morgok1", "Morgok2", "Morgok3"],
				"objectives": ["B225", "B226", "B227","B228", "B229", "B230", "B231", "B232", "B233", "B234", "B235", "B236"],
				"gambits": ["B237", "B238", "B239", "B240", "B241", "B242", "B243", "B244", "B245", "B246"],
				"upgrades": ["B247", "B248", "B249", "B250", "B251", "B252", "B253", "B254", "B255", "B256"]
			}
		},
		{
			"id": 2,
			"changedFrom": {
				"type": "Deck",
				"name": "Morgok starter",
				"comment": "This band of three orks means melee fight. Only needs some time to get to an opponent with their short feet.",
				"characters": ["Morgok1", "Morgok2", "Morgok3"],
				"objectives": ["B225", "B226", "B227","B228", "B229", "B230", "B231", "B232", "B233", "B234", "B235", "B236"],
				"gambits": ["B237", "B238", "B239", "B240", "B241", "B242", "B243", "B244", "B245", "B246"],
				"upgrades": ["B247", "B248", "B249", "B250", "B251", "B252", "B253", "B254", "B255", "B256"]
			},
			"entityId": "deck1",
			"changedTo": {
				"type": "Deck",
				"name": "Morgok starter",
				"comment": "This band of three orks means melee fight. Only needs some time to get to an opponent with their short feet.\nChanged 1 upgrade to something fancier.",
				"characters": ["Morgok1", "Morgok2", "Morgok3"],
				"objectives": ["B225", "B226", "B227","B228", "B229", "B230", "B231", "B232", "B233", "B234", "B235", "B236"],
				"gambits": ["B237", "B238", "B239", "B240", "B241", "B242", "B243", "B244", "B245", "B246"],
				"upgrades": ["B247", "B248", "B250", "B251", "B252", "B253", "B254", "B255", "B256", "B389"]
			}
		},
	]
};

const prepareString = (input) => {
	let counter = 0;
	while (input.indexOf("**") !== -1) {
		const replacement = counter % 2 === 0 ? "<b>" : "</b>";
		input = input.replace("**", replacement);

		counter++;
	}

	return input
		.replaceAll("\\n", "<br>")
		.replaceAll("*If:*", '<b class="warning">If</b>:')
		.replaceAll("*And:*", '<b class="warning">And</b>:')
		.replaceAll("*Or:*", '<b class="warning">Or</b>:')
		.replaceAll(":Hex:", "⬡")
		.replaceAll(":MagChannel:", "⚡")
		.replaceAll(":MagFocus:", "🌀")
		.replaceAll(":MagCrit:", "❗")
		.replaceAll(":boom:", "💥")
		.replaceAll(":atSmash:", "🔨")
		.replaceAll(":atFury:", "⚔️")
		.replaceAll(":atCrit:", "❗")
		.replaceAll(":Shield:", "🛡️")
		.replaceAll(":dfDodge:", "↩️")
		.replaceAll(":Health:", "❤️");
}


const addCharacerFields = (target, data) => {
	const name = document.createElement("div");
	name.innerHTML = data.leader ? "👑 " + data.name : data.name;
	name.classList.add("title");
	target.appendChild(name);
	const type = document.createElement("div");
	type.innerHTML = data.faction;
	type.classList.add("faction");
	target.appendChild(type);
	const stats = document.createElement("div");
	stats.innerHTML = 
		prepareString(data.stats);
	stats.classList.add("stats");
	target.appendChild(stats);
	const weapons = document.createElement("div");
	weapons.innerHTML = 
		prepareString(data.weapons);
	weapons.classList.add("weapons");
	target.appendChild(weapons);
	const description = document.createElement("div");
	description.innerHTML = 
		prepareString(data.description);
	description.classList.add("description"); // (●
	target.appendChild(description);

	if (data.inspire) {
		const inspire = document.createElement("div");
	inspire.innerHTML = 
		prepareString(data.inspire);
		inspire.classList.add("inspire");
		target.appendChild(inspire);
	}
};

const populateWithCards = (target, data) => {
	const cardsFragment = new DocumentFragment();
	const offset = target.childElementCount;
	data.forEach((entity, index) => {
		const id = entity.id;
		const type = entity.type || entity.editable.type;

		const item = document.createElement("div");
		item.id = id;
		const backgroundClass = (offset+index) % 2 === 0 ? "background-even" : "background-odd"; 
		item.classList.add("child-card", backgroundClass);

		if (type === "Deck") {
			item.classList.add("deck");
			const name = document.createElement("div");
			name.innerHTML = entity.editable.name;
			item.appendChild(name);
		} else if (type === "Character") {
			item.classList.add("character");
			addCharacerFields(item, entity);
		} else {
			const name = document.createElement("div");
			name.innerHTML = entity.name+`[${id}]`;
			name.classList.add("title");
			item.appendChild(name);
			const type = document.createElement("div");
			const badge = entity.faction === "Universal" ? "U" : "NU";
			type.innerHTML = entity.type+`[${badge}]`;
			type.classList.add("type");
			item.appendChild(type);
			const description = document.createElement("div");
			description.innerHTML = 
				prepareString(entity.description);
			description.classList.add("description"); // (●
			item.appendChild(description);

			if (entity.glory !== "-") {
				const glory = document.createElement("div");
				const label = entity.glory === "1" ? "point" : "points";
				glory.innerHTML = `<b>${entity.glory}</b> glory ${label}`;
				glory.classList.add("glory");
				item.appendChild(glory);
			}
			if (entity.restrictions !== "-") {
				const restrictions = document.createElement("div");
				restrictions.innerHTML = `Only for ${entity.restrictions}`;
				restrictions.classList.add("restrictions");
				item.appendChild(restrictions);
			}
		}

		cardsFragment.appendChild(item);
	});
	target.appendChild(cardsFragment);
}

const populateEntities = (target, data) => {
	const cardsFragment = new DocumentFragment();
	const offset = target.childElementCount;
	data.forEach((entity, index) => {
		const id = entity.id;

		const item = document.createElement("div");
		item.id = id;
		const backgroundClass = (offset+index) % 2 === 0 ? "background-even" : "background-odd"; 
		item.classList.add("child", backgroundClass);

		if (entity.type === "Character") {
			item.classList.add("character");
			addCharacerFields(item, entity);
		} else {
			const name = document.createElement("div");
			name.innerHTML = entity.name+`[${id}]`;
			name.classList.add("title");
			item.appendChild(name);
			const type = document.createElement("div");
			const badge = entity.faction === "Universal" ? "U" : "NU";
			type.innerHTML = entity.type+`[${badge}]`;
			type.classList.add("type");
			item.appendChild(type);
			const description = document.createElement("div");
			description.innerHTML = 
				prepareString(entity.description);
			description.classList.add("description"); // (●
			item.appendChild(description);

			if (entity.glory !== "-") {
				const glory = document.createElement("div");
				const label = entity.glory === "1" ? "point" : "points";
				glory.innerHTML = `<b>${entity.glory}</b> glory ${label}`;
				glory.classList.add("glory");
				item.appendChild(glory);
			}
			if (entity.restrictions !== "-") {
				const restrictions = document.createElement("div");
				restrictions.innerHTML = `Only for ${entity.restrictions}`;
				restrictions.classList.add("restrictions");
				item.appendChild(restrictions);
			}
		}

		cardsFragment.appendChild(item);
	});
	target.appendChild(cardsFragment);
};