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
