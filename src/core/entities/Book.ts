import { randomUUID } from 'node:crypto';

interface BookProps {
  id?: string;
  title: string;
  registeredAt?: Date;
}

export class Book {
  private props: BookProps;

  constructor(props: BookProps) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = randomUUID();
    }

    if (!this.props.registeredAt) {
      this.props.registeredAt = new Date();
    }
  }

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  set title(newTitle: string) {
    this.props.title = newTitle;
  }

  get registeredAt() {
    return this.props.registeredAt;
  }
}
