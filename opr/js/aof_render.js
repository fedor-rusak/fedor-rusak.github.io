const newBadge = (label, value) => {
	return element(
		['div', 'badge',
			['span', null, label],
			['div', 'statbreak'],
			['span', null, value]
		]
	);
}

const dfSpecialRules = (rules, translations) => {
	const target = document.createDocumentFragment();
	if (!Array.isArray(rules) || rules.length === 0) {
		target.appendChild(document.createTextNode('-'));
		return target;
	}

	rules.forEach((rule, index) => {
		const newRule = 
			elem('span', 'rule-list-item', translations[rule.name]);
		if (rule.rating) {
			newRule.innerHTML += '(' + rule.rating + ')';
		}
		if (index !== 0) {
			target.appendChild(elem('span', null, ', '));
		}
		target.appendChild(newRule);
	});

	return target;
}

const getWeapon = (item) => {
	const ap = item.specialRules.find(rule => rule.name === 'AP');
	const rules = item.specialRules
		.filter(item => item.name !== 'AP')
		.map(item => {
			return {'name': item.name, rating: item.rating}
		});
	return {
		count: item.count || 1,
		name: item.name,
		range: item.range ? item.range+'”' : '-',
		attacks: 'A' + item.attacks,
		ap: ap ? ap.rating : '-',
		specialRules: rules
	};
}

const helpRules = [
	{
		name: 'AP',
		description: 'Targets get -X to Defense rolls when blocking hits.'
	},
	{
		name: 'Empower',
		description: 'When in melee, roll one die and apply one bonus to models with this rule:\n* 1-3: Attacks get Rending\n* 4-6: Attacks get AP(+1)'
	},
	{
		name: 'Fast',
		description: 'Moves +2” when using Advance, and +4” when using Rush/Charge.'
	},
	{
		name: 'Fearless',
		description: 'Gets +1 to morale tests.'
	},
	{
		name: 'Chosen Warrior',
		description: 'This model gets +1 to hit rolls in melee and shooting.'
	},
	{
		name: 'Stealth',
		description: 'Enemies get -1 to hit rolls when shooting at this unit.'
	},
	{
		name: 'Fear',
		description: 'Always counts as having dealt +D3 wounds when checking who won melee.'
	},
	{
		name: 'Strider',
		description: 'This model may ignore the effects of difficult terrain. This model only needs to roll 2+ for a successful drop, leap or jump.'
	},
	{
		name: 'Flying',
		description: 'May move through all obstacles, and may ignore terrain effects. This model only needs to roll 2+ for a successful drop or leap, and it may freely jump without having to roll for it.'
	},
	{
		name: 'Furious',
		description: 'Gets +1 attack with a weapon of your choice when charging.'
	},
	{
		name: 'Impact',
		description: 'Deals X melee hits when charging (must be in striking range).'
	},
	{
		name: 'Rending',
		description: 'Unmodified results of 6 to hit count as having AP(4), and ignore the regeneration rule.'
	},
	{
		name: 'Battle Standard',
		'description': "Always counts as having dealt +1 wound for seeing who won melee."
	},
	{
		name: 'Hero',
		description: 'May be deployed as part of one friendly unit, which may use its Quality value for morale tests. When taking hits, you must use the unit’s Defense value, until all non-hero models are killed.'
	},
	{
		name: 'Tough',
		description: 'This model must take X wounds before being killed. If a model with tough joins a unit without it, then it is removed last when the unit takes wounds. Note that you must continue to put wounds on the tough model with most wounds in the unit until it is killed, before starting to put them on the next tough model (heroes must be assigned wounds last).'
	}
];

const elem = (tag, className, ...content) => {
	const element = document.createElement(tag);
	if (className) {
		element.classList.add(className);
	}

	content.forEach(item => {
		if (!item) {
			return;
		} else if (Array.isArray(item)) {
			element.appendChild(elem(...item));
		} else if (typeof item === 'object') {
			element.appendChild(item);
		} else {
			element.innerHTML = item;
		}
	});

	return element;
}

const element = (data) => {
	return elem(...data)
};

const labels = {
	'AP_full': 'Пробивание брони',
	'pts': ' очков',
	'Quality': 'Успех',
	'Defense': 'Защита',
	'Tough': 'Здоровье',
	'Fearless': 'Бесстрашный',
	'Hero': 'Герой',
	'Stealth': 'Скрытность',
	'Flying': 'Полет',
	'Fast': 'Быстрый',
	'Furious': 'Ярость',
	'Strider': 'Вездеход',
	'Phalanx': 'Фаланга',
	'Poison': 'Ядовитое оружие',
	'Empower': 'Усиленный удар',
	'Rending': 'Раскалывающее',
	'Hand Weapon': 'Простое оружие',
	'Hand Weapons': 'Простое оружие',
	'Great Weapon': 'Двуручное оружие',
	'Great Weapons': 'Двуручное оружие',
	'Halberd': 'Копье',
	'Dual Hand Weapons': 'Два простых оружия',
	'Javelins': 'Метательное копье',
	'Bow': 'Лук',
	'Bows': 'Лук',
	'Daggers': 'Кинжал',
	'Claws': 'Когти',
	'Great Staff': 'Большой посох',
	'Swords & Staffs': 'Меч и Посох',
	'Axe-Halberds': 'Алебарда',
	'Spear': 'Копье',
	'Spears': 'Копье',
	'Lance': 'Пика',
	'Lances': 'Пика',
	'Shortbow': 'Короткий Лук',
	'Shortbows': 'Короткий Лук',
	'Impact': 'Сталкивание',
	'Wings': 'Крылья',
	'Ambush': 'Засада',
	'Daemon Mount': 'Ездовой монстр',
	'Fear': 'Устрашение',
	'Disc of Change': 'Летучий диск',
	'Chosen Warrior': 'Умелый Воин',
	'Battle Standard': 'Флаг отряда'
};

const ruleTranslations = {
	'AP': {
		name: 'Пробивание брони (ПБ)',
		description: '<u>-Х</u> к значению кубов при броске на защиту.'
	},
	'Furious': {
		name: labels.Furious,
		description: '+1 атака одним оружием ближнего боя при выполнении рывка.'
	},
	'Empower': {
		name: labels.Empower,
		description: 'Перед рукопашным ударом бросьте куб - <b>*1-3</b>: оружие имеет эффект <u>'+labels.Rending+'</u> <b>*4-6</b>: <u>'+labels.AP_full+'</u> +1'
	},
	'Fast': {
		name: labels.Fast,
		description: '+2” при ходьбе и +4” при беге или рывке.'
	},
	'Fear': {
		name: labels.Fear,
		description: 'Бросьте куб. Исход рукопашной считается как если бы отряд нанес дополнительно количество урона равное половине значения куба.'
	},
	'Fearless': {
		name: labels.Fearless,
		description: '+1 к значениям кубов при проверке храбрости.'
	},
	'Chosen Warrior': {
		name: labels['Chosen Warrior'],
		description: '+1 к значению кубов при бросках на рукопашные атаки и выстрелы.'
	},
	'Strider': {
		name: labels.Strider,
		description: 'Боец неуязвим для опасностей на земле. Провал прыжков, спрыгиваний только при <b>*1</b>.'
	},
	'Stealth': {
		name: labels.Stealth,
		description: '-1 на броски выстрелов для вражеских бойцов.'
	},
	'Flying': {
		name: labels.Flying,
		description: 'Боец свободно пролетает через препятствия, бойцов и неуязвим для опасностей на земле. Прыжки всегда успешны, а спрыгивания считаются провалом только при <b>*1</b>.'
	},
	'Impact': {
		name: labels.Impact,
		description: 'При рывке если вражеский боец не дальше 2” вы наносите ему <u>Х</u> успешных ударов. '
	},
	'Rending': {
		name: labels.Rending,
		description: '<b>*6</b> при атаке считается будто имеет <u>'+labels.AP_full+'(4)</u>.'
	},
	'Battle Standard': {
		name: labels['Battle Standard'],
		'description': "Исход рукопашной считается как если бы отряд нанес дополнительно 1 урона."
	},
	'Hero': {
		name: labels.Hero,
		description: 'Бойцы на расстоянии до 12” могут использовать <u>Успех</u> героя при проверках храбрости. Только если герой не потерял сознание.'
	},
	'Tough': {
		name: labels.Tough,
		description: 'Игрок проверяет последствия урона на бойце, только если тот уже потерял <u>X</u> здоровья. Боец побежден, если значение броска сложенное с количеством накопленного урона будет не меньше <u>5+Х</u>. В ситуации (если была использована магия) и боец лишился сознания, но имеет здоровье. Успешные атаки на расстоянии или рывки вражеских бойцов не приводят к его поражению, а лишь к потере здоровья.'
	}
};

const combinedUnitLabels = [
	'Объединенный отряд Омега',
	'Объединенный отряд Альфа'
];

const aof = {};
aof.render = (armybooks, army) => {
	const unitMap = {};
	armybooks.forEach( armybook => {
		armybook.units.forEach(unit => {
			unitMap[unit.id] = unit;
		});
	});
	const upgradeMap = {};
	armybooks.forEach( armybook => {
		const armyUpgradeMap = {};
		upgradeMap[armybook.uid] = armyUpgradeMap;
		armybook.upgradePackages.forEach(upgrade => {
			armyUpgradeMap[upgrade.uid] = Object.fromEntries(
				upgrade.sections.map(section => [section.uid, section])
			);
		});
	});

	const unitLinks = army.list.units.filter(unit => unit.joinToUnit !== null && unit.combined === false).map(unit => unit.joinToUnit);
	const unitsDiv = document.querySelector('#units');
	const unitStructs = 
		army.list.units.filter(unit => !(unit.joinToUnit !== null && unit.combined === true)).map(unit => {
		const combinedModifier = unit.combined ? 2 : 1;
		console.log(unit);
		console.log(combinedModifier);

		const unitSpec = unitMap[unit.id];

		let cost = unitSpec.cost * combinedModifier;

		const specialRules = unitSpec.specialRules.concat([]);
		const toughRule = specialRules.find(rule => rule.name === 'Tough');
		let toughRating = toughRule ? toughRule.rating : 0;

		let weapons = unitSpec.equipment.map(getWeapon);
		weapons.forEach(
			weapon => {
				if (weapon.count) {
					weapon.count *= combinedModifier;
				}
		});

		const unitUpgradeMap = {};
		unitSpec.upgrades.forEach(
			upgrade => {
				Object.assign(unitUpgradeMap, upgradeMap[unit.armyId][upgrade]);
			}
		);

		const upgrades = [];

		unit.selectedUpgrades.forEach(upgrade => {
			const weaponUpgrade = unitUpgradeMap[upgrade.upgradeId];

				const actualUpgrade = weaponUpgrade.options.find(option => option.uid === upgrade.optionId);

				cost += actualUpgrade.cost;

			if (weaponUpgrade.type === 'replace') {
				const originalLabel = weaponUpgrade.label;
				let whatToReplace = originalLabel.substring(8);
				if (whatToReplace.indexOf('any ') === 0) {
					whatToReplace = whatToReplace.substring(4);
				} else if (whatToReplace.indexOf('all ') === 0) {
					whatToReplace = whatToReplace.substring(4);
				} else if (whatToReplace.indexOf('one ') === 0) {
					whatToReplace = whatToReplace.substring(4);
				}

				const replaced = weapons.find(weapon => {
					return weapon.name === whatToReplace || weapon.name === (whatToReplace + 's')
				});

				if (originalLabel.indexOf('Replace one') === 0) {
					replaced.count -= 1;
				} else {
					weapons = weapons.filter(weapon => {
						return weapon.name !== whatToReplace
					});
				}

				actualUpgrade.gains.forEach(item => {
					const replacing = getWeapon(item);
					
					if (originalLabel.indexOf('Replace all') === 0) {
						replacing.count = replaced.count;
					}

					weapons.push(replacing);
				});
			}
			else if (weaponUpgrade.label === 'Upgrade with one') {
				actualUpgrade.gains.forEach(item => {
					if (item.type === 'ArmyBookWeapon') {
						const replacing = getWeapon(item);

						weapons.push(replacing);
					} else if (item.type === 'ArmyBookItem') {
						upgrades.push({
							name: item.name,
							rules: item.content.map( rule => {
								return {
									name: rule.name
								};
							})
						});
					}
				});
			} else if (weaponUpgrade.label === 'Upgrade all models with') {
				specialRules.push({
					name: actualUpgrade.gains[0].name,
				})
			} else if (weaponUpgrade.label === 'Upgrade with') {
				specialRules.push({
					name: actualUpgrade.gains[0].name,
				})
			} else if (weaponUpgrade.label === 'Mount on') {
				const gains = actualUpgrade.gains[0];
				gains.content
					.filter( item => item.type === 'ArmyBookWeapon')
					.forEach( item => {
						weapons.push(getWeapon(item));
					});

				upgrades.push({
					name: gains.name,
					rules: gains.content.filter(item => item.type === 'ArmyBookRule')
					.map( rule => {
						const prefix = rule.name === 'Tough' ? '+' : '';
						return {
							name: rule.name,
							rating: prefix+rule.rating
						};
					})
				});
			}
			else {
				alert('upgrade failed!');
			}
		});

		upgrades.forEach( upgrade => {
			upgrade.rules.forEach(rule => {
				if (rule.name === 'Tough') {
					toughRating = parseInt(toughRating) + parseInt(rule.rating);
				}
			});
		});

		const hasAttachementToUnit = unitLinks.indexOf(unit.selectionId);
		const isAttachedToUnit = unitLinks.indexOf(unit.joinToUnit);
		const linkId = (hasAttachementToUnit+1) || (isAttachedToUnit+1) || null;


		const additionalRules = [];
		if (upgrades.length > 0) {
			upgrades.forEach(upgrade => {
				additionalRules.push(...upgrade.rules);
			});
		}

		return {
			name: unit.customName ? unit.customName : unitSpec.name,
			size: unitSpec.size *combinedModifier,
			cost: cost,
			type: unitSpec.name,
			quality: unitSpec.quality,
			defense: unitSpec.defense,
			toughRating: toughRating,
			specialRules: specialRules.concat(additionalRules),
			weapons: weapons,
			upgrades: upgrades,
			combinedUnit: linkId === -1 ? null : linkId
		}
	});

	const compareByCombinedUnit = (left, right) => {
		return right.combinedUnit - left.combinedUnit;
	};
	unitStructs.sort(compareByCombinedUnit).forEach(unitStruct => {
		const newUnit = elem('div', 'unit');

		const summary = element([
			'div', 'summary',
			['div', null, 'summary-label',
				unitStruct.name,
				[
					'span',
					'summary-hint',
					' [' + unitStruct.size + '] - ' + unitStruct.cost + labels.pts
				]
			],
			// ['div', 'summary-type',unitStruct.type]
		]);

		const badges = element([
			'div', 'badges',
			newBadge(labels.Quality, unitStruct.quality + '+'),
			newBadge(labels.Defense, unitStruct.defense + '+'),
			unitStruct.toughRating ? newBadge(labels.Tough, unitStruct.toughRating) : null
		]);

		const specialtraights = element([
			'div', 'specialtraights',
			dfSpecialRules(unitStruct.specialRules, labels)
		]);

		const newWeaponsTable = document.getElementById('weapons_ru').content.cloneNode(true);
		unitStruct.weapons.forEach(weapon => {
			let label = labels[weapon.name];
			if (weapon.count !== 1) {
				label = weapon.count + 'x ' + label;
			}
			const rowData = [
				'tr', null,
				['td', null, label],
				['td', null, weapon.range],
				['td', null, weapon.attacks],
				['td', null, weapon.ap],
				['td', null, dfSpecialRules(weapon.specialRules, labels)]
			]
			
			newWeaponsTable.querySelector('tbody').appendChild(element(rowData));
		});

		let newUpgradesTable = null;
		if (unitStruct.upgrades.length > 0) {
			newUpgradesTable = document.getElementById('upgrades_ru').content.cloneNode(true);
			unitStruct.upgrades.forEach(upgrade => {
				let label = labels[upgrade.name];
				if (upgrade.count && upgrade.count !== 1) {
					label = upgrade.count + 'x' + label;
				}
				const rowData = [
					'tr', null,
					['td', null, label],
					['td', null, dfSpecialRules(upgrade.rules, labels)]
				];

				newUpgradesTable.querySelector('tbody').appendChild(element(rowData));
			});
		}

		unitsDiv.appendChild(element([
			'div', 'unit',
			summary,
			unitStruct.combinedUnit !== null ? element(['div', 'combined', '● ' + combinedUnitLabels[unitStruct.combinedUnit-1]]) : null,
			badges,
			specialtraights,
			newWeaponsTable,
			newUpgradesTable
		]));
	});

	const rulesDiv = document.querySelector('#rules');
	helpRules.forEach(rule => {
		const translation = ruleTranslations[rule.name];
		const name = translation ? translation.name : rule.name;
		const description = translation ? translation.description : rule.description;

		rulesDiv.appendChild(element([
			'p', 'rule',
			['span', null, name + ': '],
			['span', null, description]
		]));
	});
};