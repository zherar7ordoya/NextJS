module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

-- 1. MODELO (El estado de tu app)
type alias Model = Int

init : Model
init = 0

-- 2. UPDATE (La lógica: una función pura que recibe un mensaje y el estado viejo, y devuelve uno nuevo)
type Msg = Incrementar | Decrementar

update : Msg -> Model -> Model
update msg model =
    case msg of
        Incrementar -> model + 1
        Decrementar -> model - 1

-- 3. VIEW (La interfaz: transforma el modelo en HTML)
view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrementar ] [ text "-" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Incrementar ] [ text "+" ]
        ]

-- MAIN: Aquí se une todo
main : Program () Model Msg
main =
    Browser.sandbox { init = init, update = update, view = view }
    