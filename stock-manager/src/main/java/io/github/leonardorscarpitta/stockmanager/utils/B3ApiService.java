package io.github.leonardorscarpitta.stockmanager.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class B3ApiService {

    @Value("api.brapi.secret")
    private String BRAPIKEY;

    public String checkSymbolPrice(String symbol) throws IOException, InterruptedException {
        String baseUrl = "https://brapi.dev/api/quote/";
        String uri = baseUrl + symbol;

        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("Authorization", "Bearer " + this.BRAPIKEY)
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 200) {
            String responseBody = response.body();
            return extractRegularMarketPrice(responseBody);
        }

        return null;
    }

    private static String extractRegularMarketPrice(String jsonResponse) {
        Pattern pattern = Pattern.compile("\"regularMarketPrice\"\\s*:\\s*([0-9]+\\.?[0-9]*)");
        Matcher matcher = pattern.matcher(jsonResponse);

        if (matcher.find()) {
            return matcher.group(1);
        }

        return null;
    }
}
