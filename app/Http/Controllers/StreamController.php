<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Streams;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use PHPUnit\Framework\Constraint\Count;

class StreamController extends Controller
{

    public function index(Request $request)
    {
       $user_id = $request->input('user_id');
       $video_id = $request->input('video_id');

       if (!$video_id) {
            $streams = DB::table('streams')
            ->join('videos', 'streams.video_id', '=', 'videos.id')
            ->where('streams.user_id', $user_id)
            ->orderBy('streams.stream_date', 'asc')
            ->get();
       } else {
            $streams = DB::table('streams')
            ->join('videos', 'streams.video_id', '=', 'videos.id')
            ->where('streams.user_id', $user_id)
            ->where('streams.video_id', $video_id)
            ->orderBy('streams.stream_date', 'asc')
            ->get();
       }

       return response()->json(array('stream' => $streams, 'count' => $streams->count()), 200);
    }

    public function store($user_id, $video_id, Request $request)
    {
       $newStream = new Streams();
       $newStream->user_id = $user_id;
       $newStream->video_id = $video_id;
       $newStream->caption = $request->stream['caption'];
       $newStream->stream_date = $request->stream['datetime'];
       $newStream->save();

       return response()->json($newStream, 200);
    }
    public function show($id)
    {
        $stream = Streams::find($id);
        return response()->json($stream, 200);
    }
}
