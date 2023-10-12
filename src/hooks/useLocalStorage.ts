import { StorageVariable } from "../utils/contants/storageVariables";

export const useLocalStorage = () => {
  const getItem = (key: StorageVariable) => {
    const localStorageValue = localStorage.getItem(key);
    const valueIsJson = isJSON(localStorageValue || "");
    if (valueIsJson) {
      return JSON.parse(localStorageValue as string);
    } else {
      return localStorageValue;
    }
  };

  const setItem = (key: StorageVariable, value: string | number | object) => {
    if (!value) {
      localStorage.removeItem(key);
      return null;
    }
    if (typeof value === "string") {
      localStorage.setItem(key, value);
      return value;
    }

    localStorage.setItem(key, JSON.stringify(value));
    return value;
  };

  const removeItem = (key: StorageVariable) => {
    localStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem };
};

const isJSON = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};
