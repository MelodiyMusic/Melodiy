namespace Melodiy.Application.Services.TrackService;

public interface ITrackService
{
    Task<TrackResponse> UploadSong(UploadTrackRequest request, string username, int userId);
}