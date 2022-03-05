import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { youtube } from '../service/youtube.service'

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  videoContent: any;

  constructor(private route: ActivatedRoute, private router: Router, private youtube: youtube) {}

  ngOnInit(): void {
    let label = this.route.snapshot.params['label'];

    // Get video ID from Youtube API

      this.youtube.getVideoId(label)
      .subscribe((videoData: any) => {
        this.videoContent = videoData;
        console.log("Log from Youtube service: ", this.videoContent)
      });
  }

}
