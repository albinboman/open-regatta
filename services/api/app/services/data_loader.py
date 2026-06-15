from __future__ import annotations

import json
import os
from functools import lru_cache
from pathlib import Path
from typing import Any


def _project_root() -> Path:
    return Path(__file__).resolve().parents[4]


def _examples_dir() -> Path:
    configured = os.getenv("OPEN_REGATTA_DATA_DIR")
    if configured:
        return Path(configured).expanduser().resolve()
    return _project_root() / "data" / "examples"


@lru_cache(maxsize=8)
def load_example_json(filename: str) -> dict[str, Any]:
    file_path = _examples_dir() / filename
    with file_path.open("r", encoding="utf-8") as file:
        return json.load(file)
