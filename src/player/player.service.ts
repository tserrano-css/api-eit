import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Pele',
      position: 'Delantero',
      Equipo: 'Santos',
      Edad: 24,
    },
    {
      id: 2,
      name: 'Maradona',
      position: 'Delantero',
      Equipo: 'Boca',
      Edad: 22,
    },
  ];

  getPlayers(): Player[] {
    return this.players;
  }

  getPlayer(id: any): Player {
    return this.players.find((player) => player.id == id);
  }

  createPlayer(player): Player {
    this.players.push({
      id: this.players.length + 1,
      ...player,
    });
    return this.players[this.players.length - 1];
  }
}
