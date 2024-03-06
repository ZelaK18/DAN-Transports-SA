params [["_classItem", ""], ["_position", [0, 0, 0]], ["_dir", 0]];

_objects = [
    ["HL_Panneau_DeviG", [2268.679, 13364.266, 0], 100],
    ["HL_Panneau_DeviG", [2268.328, 13366.020, 0], 150],
    ["HL_Panneau_DeviG", [2266.267, 13366.67, 0], 50]
];

spawnObjects = {
    {
        _classItem = _x # 0;
        _position = _x # 1;
        _dir = _x # 2;
        _objects = createVehicle [_classItem, _position, [], 0, "CAN_COLLIDE"];
        _objects setDir _dir;
    } forEach _objects;
    hint "Objets spawnés aux positions spécifiées";
};

[_objects] call spawnObjects;

    case 1 : { //create fire target
        _spawnPosDir params ["_position", "_dir"];
        private _fireObject = createVehicle ["HL_Cible_Invisible", _position, [], 0, "CAN_COLLIDE"];
        sleep 0.1;
        _fireObject setDir _dir;
        _fireObject setVariable ["power", _power, false];
        _fireObject addEventhandler ["HandleDamage", {
            params ["_fireObject", "_selection", "_damage", "_source", "_projectile", "_hitIndex", "_instigator", "_hitPoint"];
            if (_projectile isEqualTo "HL_Water") then {
                private _strength = if (currentWeapon _instigator isEqualTo "HL_Lance_Incendie") then {1/NB_HIT_TO_DESTROY_FIRE_HOSE} else {1/NB_HIT_TO_DESTROY_FIRE_EXTINGUISHER};
                private _newDamage = (_fireObject getVariable ["waterDamage", 0]) + _strength;
                if (_newDamage >= 1) then {
                    [2, _fireObject] spawn SYS_fnc_fire;
                } else {
                    _fireObject setVariable ["waterDamage", _newDamage, false];
                };
            };

            _dmg = 0;
            _dmg
        }];