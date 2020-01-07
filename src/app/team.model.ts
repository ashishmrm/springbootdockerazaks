import { Member } from './member.model';

export interface Team {
    name: string;
    position: number;
    members: Member[];
    image: string;
}