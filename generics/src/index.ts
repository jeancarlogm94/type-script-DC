// Generics

interface Person {
  id: number;
  name: string;
}

interface Employee extends Person {
  name: string;
}

interface Product extends Person {
  price: number;
}

interface Data<T> {
  addItem(newItem: T): void;
}

class DataCollection<T extends { id: number; name: string }>
  implements Data<T>
{
  private items: T[] = [];

  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  getItems(): void {
    console.log(`List of items`, JSON.stringify(this.items));
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }

  getItemById(id: number): T | undefined {
    return this.items.find((item: T) => item.id === id);
  }
}

const productCollection = new DataCollection<Product>();

const newData2 = {
  id: 2,
  name: 'beer',
  price: 200,
};

productCollection.addItem(newData2);
productCollection.getItems();
