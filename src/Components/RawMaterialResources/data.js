// ESM
import { faker } from '@faker-js/faker';


export function createRandomUser() {
  return {
    ResourceName: faker.person.lastName(),
    ResourceType: faker.person.firstName(),
    RequestedFor: faker.person.lastName(),
    Quantity: faker.datatype.number(400),
    StoredAt: faker.person.lastName(),
    AddedBy: faker.person.firstName(),
    CreatedAt: faker.date.anytime()
  

  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});