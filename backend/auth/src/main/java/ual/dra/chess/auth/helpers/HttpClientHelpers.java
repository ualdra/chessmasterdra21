package ual.dra.chess.auth.helpers;

import java.io.IOException;
import java.net.*;
import java.net.http.*;
import java.nio.charset.StandardCharsets;
import java.util.*;

public final class HttpClientHelpers {

    private static final HttpClient httpClient = HttpClient.newBuilder().version(HttpClient.Version.HTTP_2).build();

    public static HttpResponse<String> get(String url) {
        HttpRequest request = HttpRequest.newBuilder().GET().uri(URI.create(url)).build();

        try {
            return httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static HttpResponse<String> delete(String url) {
        HttpRequest request = HttpRequest.newBuilder().DELETE().uri(URI.create(url)).build();

        try {
            return httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static HttpResponse<String> post(String url, Map<Object, Object> data) {

        HttpRequest request = HttpRequest.newBuilder().POST(toForm(data)).uri(URI.create(url))
                .header("Content-Type", "application/x-www-form-urlencoded").build();

        try {
            return httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
    }

    private static HttpRequest.BodyPublisher toForm(Map<Object, Object> data) {
        StringBuilder builder = new StringBuilder();

        for (Map.Entry<Object, Object> entry : data.entrySet()) {
            if (builder.length() > 0) {
                builder.append("&");
            }

            builder.append(URLEncoder.encode(entry.getKey().toString(), StandardCharsets.UTF_8));
            builder.append("=");
            builder.append(URLEncoder.encode(entry.getValue().toString(), StandardCharsets.UTF_8));
        }

        return HttpRequest.BodyPublishers.ofString(builder.toString());
    }
}
