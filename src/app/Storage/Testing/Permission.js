const abilities = {
  addFileSystemItem: 1,
  listFileSystemItems: 2,
  download: 3,
};

class Permission {
  #permissions = [];

  getAll() {
    return this.#permissions;
  }

  can(ability) {
    if (this.#permissions.includes(ability)) {
      return true;
    } else {
      return false;
    }
  }

  add(ability) {
    if (!this.#permissions.includes(ability)) {
      this.#permissions.push(ability);
    }
  }

  remove(ability) {
    let abilityIndex = this.#permissions.indexOf(ability);
    if (abilityIndex > -1) {
      this.#permissions.splice(abilityIndex, 1);
    }
  }
}

export { Permission, abilities };
