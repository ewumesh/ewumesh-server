import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// import COCO-SSD model as cocoSSD
import * as cocoSSD from '@tensorflow-models/coco-ssd';

@Component({
    selector: 'app-name',
    templateUrl: './object-detection.component.html',
    styleUrls: ['./object-detection.component.scss'],
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
        private titleService: Title,
        private meta: Meta
    ) {
        this.setMetaTag();

        console.log(this,meta.getTags, "TAGS....")
    }

    ngOnInit() { }

    public async predictWithCocoModel() {
        // const model = await cocoSSD.load({base:'lite_mobilenet_v2'})
        const model = await cocoSSD.load('lite_mobilenet_v2')
        this.detectFrame(this.video, model);
    }

    webcam_init() {
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
    }

    stopWebcam() {
        if (this.video) {
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
        const canvas = <HTMLCanvasElement>document.getElementById("canvas");
        let ctx
        let font
        if (canvas) {
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
    }

    private setMetaTag() {
        console.log('Set Meta details...')
        this.titleService.setTitle('Ewumesh | AI | Real Time Object Detection using Tensorflow | Artificial Intelligence');
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'Ewumesh | AI | Real Time Object Detection using Tensorflow | Artificial Intelligence',
            },
            {
                property: 'og:url',
                content: 'https://ewumesh.com/ai/object-detection',
            },

            {
                property: 'og:description',
                content: `${'Real-time object detection using TensorFlow can be achieved using TensorFlows Object Detection API. This API provides pre-trained models for detecting objects in images and videos, and also allows users to train their own models on custom datasets. AI stands for Artificial Intelligence, which refers to the ability of machines to perform tasks that typically require human intelligence, such as recognizing speech, understanding natural language, making decisions, and learning from experience. AI is a rapidly growing field of computer science and engineering, which has its roots in the development of machine learning algorithms and neural networks. Some of the key applications of AI include natural language processing, computer vision, robotics, and autonomous systems. AI technology is used in a wide range of industries, including healthcare, finance, transportation, and manufacturing, to improve efficiency, accuracy, and decision-making.' + 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
            },
            {
                property: 'og:type',
                content: `website`,
            },
            {
                property: 'og:site_name',
                content: `Ewumesh`,
            },
            {
                property: 'og:image',
                content: 'https://ewumesh.com/assets/images/AI.webp',
            },

            {
                property: 'twitter:card',
                content: `summary_large_image`,
            },

            {
                property: 'twitter:site',
                content: `@ewumesh`,
            },
            {
                property: 'twitter:title',
                content: `${'Ewumesh | Discover Yourself!'}`,
            },
            {
                property: 'twitter:description',
                content: `${'Real-time object detection using TensorFlow can be achieved using TensorFlows Object Detection API. This API provides pre-trained models for detecting objects in images and videos, and also allows users to train their own models on custom datasets. AI stands for Artificial Intelligence, which refers to the ability of machines to perform tasks that typically require human intelligence, such as recognizing speech, understanding natural language, making decisions, and learning from experience. AI is a rapidly growing field of computer science and engineering, which has its roots in the development of machine learning algorithms and neural networks. Some of the key applications of AI include natural language processing, computer vision, robotics, and autonomous systems. AI technology is used in a wide range of industries, including healthcare, finance, transportation, and manufacturing, to improve efficiency, accuracy, and decision-making.' + 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
            },
            {
                property: 'twitter:image',
                content: 'https://ewumesh.com/assets/images/AI.webp',
            },
            {
                property: 'twitter:url',
                content: `${'https://ewumesh.com/ai/object-detection'}`,
            },
            {
                name: 'twitter:name:alt',
                content: `${'https://ewumesh.com/ai/object-detection'}`,
            },
        ]);
    }

    ngOnDestroy() {
        this.stopWebcam();
    }

}
