import { randomUUID } from 'node:crypto';

interface UserProps {
  id?: string;
  name: string;
  nickname: string;
  createdAt?: Date;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props

    if (!this.props.id) {
      this.props.id = randomUUID();
    }

    if (!this.props.createdAt) {
      this.props.createdAt = new Date();
    }
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  set name(newname: string) {
    this.props.name = newname;
  }

  get nickname() {
    return this.props.nickname;
  }

  set nickname(newNickname: string) {
    this.props.nickname = newNickname;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
