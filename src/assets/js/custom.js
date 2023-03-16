var localStream;

onUserMediaSuccess = function(stream) {
   // attach to a video element
   
   // keep a reference
   localStream = stream;
};

localStream.stop();