import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

// import COCO-SSD model as cocoSSD
import * as cocoSSD from '@tensorflow-models/coco-ssd';

@Component({
    selector: 'app-name',
    templateUrl: './object-detection.component.html',
    styleUrls: ['./object-detection.component.scss'],
    // changeDetection:ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('bannerTrigger', [
            transition(":enter", [
                query("*", [
                    style({ opacity: 0, transform: "translateX(-50px)" }),
                    stagger(50, [
                        animate(
                            "250ms cubic-bezier(0.35, 0, 0.25, 1)",
                            style({ opacity: 1, transform: "none" })
                        )
                    ])
                ])
            ])
        ])
    ]
})
export class ObjectDetectionComponent implements OnInit, OnDestroy {
    title = 'Real time Object Detection';
    private video: HTMLVideoElement;

    loading: boolean;

    constructor(
        private elementRef: ElementRef,
        private router: Router,
        private titleService: Title,
        // @Inject(DOCUMENT) private document: Document
    ) {
        this.titleService.setTitle('Ewumesh | AI | Real Time Object Detection');
    }

    ngOnInit() {
        // this.webcam_init();

    }

    public async predictWithCocoModel() {
        // const model = await cocoSSD.load({base:'lite_mobilenet_v2'})
        const model = await cocoSSD.load('lite_mobilenet_v2')
        this.detectFrame(this.video, model);
    }

    webcam_init() {
        // if (typeof document !== "undefined"){
        this.loading = true;
        this.video = <HTMLVideoElement>document.getElementById("vid");

        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: {
                    facingMode: "user",
                }
            })
            .then(stream => {
                this.video.srcObject = stream;
                this.loading = false;
                this.video.onloadedmetadata = () => {
                    this.video.play();
                };
            });

        // this.loading = false;
        this.predictWithCocoModel();
        // }
    }

    stopWebcam() {
        if(this.video) {
        (<MediaStream>this.video.srcObject).getTracks().forEach(stream => stream.stop());
        }
    }

    detectFrame = (video, model) => {
        model.detect(video).then(predictions => {
            this.renderPredictions(predictions);
            requestAnimationFrame(() => {
                this.detectFrame(video, model);
            });
        });
    }

    renderPredictions = predictions => {
        // if (typeof document !== "undefined"){
        const canvas = <HTMLCanvasElement>document.getElementById("canvas");
        let ctx
        let font
        if(canvas) {
         ctx = canvas.getContext("2d");
         canvas.width = 300;
        canvas.height = 300;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                // Font options.
                 font = "16px sans-serif";
                ctx.font = font;
                ctx.textBaseline = "top";
                ctx.drawImage(this.video, 0, 0, 300, 350);
        }

    

        predictions.forEach(prediction => {
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            const width = prediction.bbox[2];
            const height = prediction.bbox[3];
            // Draw the bounding box.
            ctx.strokeStyle = "#00FFFF";
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            // Draw the label background.
            ctx.fillStyle = "#00FFFF";
            const textWidth = ctx.measureText(prediction.class).width;
            const textHeight = parseInt(font, 10); // base 10
            ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
        });

        predictions.forEach(prediction => {
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            // Draw the text last to ensure it's on top.
            ctx.fillStyle = "#000000";
            ctx.fillText(prediction.class, x, y);
        });
    // }
    }

    ngOnDestroy() {
        this.stopWebcam();
    }

}
