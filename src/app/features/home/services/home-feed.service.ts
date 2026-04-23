import { Injectable } from '@angular/core';
import {
  HomeNavItem,
  HomeQuickAction,
  HomeSuggestion,
} from '../models/home-navigation.model';

@Injectable()
export class HomeFeedService {
  readonly menuItems: HomeNavItem[] = [
    { label: 'Home', icon: 'home', active: true },
    { label: 'Explore', icon: 'explore' },
    { label: 'Messages', icon: 'chat_bubble' },
    { label: 'Bookmarks', icon: 'bookmark' },
  ];

  readonly suggestions: HomeSuggestion[] = [
    { name: 'Nour Hassan', handle: '@nourh' },
    { name: 'Omar Adel', handle: '@omaradel' },
    { name: 'Mona Salem', handle: '@monasalem' },
  ];

  readonly trends = ['#Angular', '#Frontend', '#WebPerformance'];

  readonly quickActions: HomeQuickAction[] = [
    { label: 'Post', icon: 'edit_square' },
    { label: 'Photo', icon: 'photo_camera' },
    { label: 'Poll', icon: 'poll' },
  ];
}
