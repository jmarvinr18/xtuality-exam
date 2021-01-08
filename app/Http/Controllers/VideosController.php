<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Videos;
class VideosController extends Controller
{
    public function index($id)
    {
        $videos = Videos::where('user_id', $id)->get();
        return response()->json(array('videos' => $videos, 'count' => $videos->count()), 200);
    }

    public function store($id, Request $request)
    {
        $newVideo = new Videos();
        $newVideo->user_id = $id;
        $newVideo->title = $request->title;
        $newVideo->subtitle = $request->subtitle;
        $newVideo->description = $request->description;
        $destinationPath = public_path().'/images/uploaded-images';


        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = $file->getClientOriginalName();
            $file->move($destinationPath, $fileName);
            $newVideo->thumbnail = $fileName;
            echo $fileName;
        }
        $newVideo->save();
        
    }   

    public function show($id)
    {
        $videos = Videos::find($id);
        return response()->json($videos, 200);
    }

    public function update(Request $request, $id)
    {
        $upateVideo = Videos::find($id);
        $upateVideo->title = $request->title;
        $upateVideo->subtitle = $request->subtitle;
        $upateVideo->description = $request->description;
        $destinationPath = public_path().'/images/uploaded-images';

        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = $file->getClientOriginalName();
            $file->move($destinationPath, $fileName);
            $upateVideo->thumbnail = $fileName;
        }
        $upateVideo->save();
        return response()->json($upateVideo, 200);
    }

    public function destroy($id)
    {
        $video = Videos::find($id);
        $video->delete();
    }
}
