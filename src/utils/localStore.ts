import { StorageVariable } from "./contants/storageVariables";
import { decodeData, encodeData } from "./crypto";
import { logger } from "./logger";

class LocalStore {
  public getItem(key: StorageVariable) {
    const localStorageValue = localStorage.getItem(key);

    if (!localStorageValue) return null;

    const decodedValue = decodeData(localStorageValue);
    const valueIsJson = this.isJSON(decodedValue);
    if (valueIsJson) {
      return JSON.parse(decodedValue as string);
    } else {
      return decodedValue;
    }
  }

  public setItem(key: StorageVariable, value: string | number | object) {
    localStorage.setItem(key, encodeData(value));
    return value;
  }

  public removeItem(key: StorageVariable) {
    localStorage.removeItem(key);
  }

  public setToObjectItem(key: StorageVariable, value: Record<string, any>) {
    const existingValues = localStore.getItem(key);

    if (!existingValues) {
      this.setItem(key, value);
    }

    if (!this.isObject(existingValues)) {
      logger.warn("Item requested is not an object");
      return null;
    }

    const updatedItem = { ...existingValues, ...value };

    this.setItem(key, updatedItem);
    return value;
  }

  public setToArrayItem(key: StorageVariable, value: string | number | object) {
    const existingValues = this.getItem(key);

    if (!Array.isArray(existingValues)) {
      logger.warn("Item requested is not an array");
      return null;
    }

    if (existingValues && existingValues.length > 0) {
      const updatedValues = [...existingValues, value];
      localStorage.setItem(key, encodeData(updatedValues));
      return value;
    }

    localStorage.setItem(key, encodeData([value]));
    return value;
  }

  public removeFromArrayItem(
    key: StorageVariable,
    value: string | number,
    isObjectProperty?: boolean,
    property?: string
  ) {
    const existingValues = this.getItem(key);

    if (!Array.isArray(existingValues)) {
      logger.warn("Item requested is not an array");
      return null;
    }

    if (!existingValues) return;
    if (existingValues && existingValues.length <= 0) return;

    if (isObjectProperty && property) {
      const updatedValues = existingValues.filter(
        (item) => item[property] === !value
      );
      localStorage.setItem(key, encodeData(updatedValues));
      return value;
    }

    const updatedValues = existingValues.filter((item) => item === !value);
    localStorage.setItem(key, encodeData(updatedValues));
    return value;
  }

  public arrayItemHasValue(key: StorageVariable, value: string | number) {
    const item = this.getItem(key);
    if (!Array.isArray(item)) {
      logger.warn("item is not of array type");
      return false;
    }

    return item.includes(value);
  }

  private isObject(value: null) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }

  private isJSON(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  clearLocalStore() {
    this.removeItem(StorageVariable.USER_DATA);
    this.removeItem(StorageVariable.TOKENS);
    this.removeItem(StorageVariable.TOKEN_EXPIRY);
  }
}

export const localStore = new LocalStore();
