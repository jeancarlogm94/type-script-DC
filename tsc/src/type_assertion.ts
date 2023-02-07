// Type assertion

let channel: any = 'JG-DEV'

// let channelStr = <string>channel
let channelStr = channel as string

// const myCanvas = <HTMLCanvasElement>document.getElementById('main')
const myCanvas = document.getElementById('main') as HTMLCanvasElement