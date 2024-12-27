import { type Entity } from "shared";

interface Repository<T extends Entity> {
  create(newData: Omit<T, keyof Entity>): Promise<T>;

  /** @param query - entity values to match */
  read(
    query: Partial<Omit<T, keyof Omit<Entity, "id">>>
  ): Promise<T | undefined>;
  readAll(): Promise<T[]>;
  update(id: string, updateData: Partial<Omit<T, keyof Entity>>): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export { type Repository };
