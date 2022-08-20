from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt

from core.models import Guest, Companion

import json
import pdb


@csrf_exempt
def get_guest(request):

    phone = json.loads(request.body)['phone']

    try:
        guest = Guest.objects.get(cellphone=phone)
    except Guest.DoesNotExist:
        return HttpResponse('El celular no existe en base de datos',
                            status=500)
    except Guest.MultipleObjectsReturned:
        return HttpResponse(
            'Hay un error en la Base de Datos, dos o más invitados tienen el mismo celular',
            status=403)
    companions = [*Companion.objects.filter(guest=guest)]

    json_to_response = {
        'id':
        guest.id,
        'confirmed':
        guest.confirmed,
        'name':
        guest.name,
        'companions': [{
            'id': companion.id,
            'name': companion.name,
            'confirmed': companion.confirmed
        } for companion in companions]
    }

    return HttpResponse(json.dumps(json_to_response),
                        content_type="application/json")


@csrf_exempt
def confirm(request):

    data = json.loads(request.body)['confirmation']
    companions = data['companions']

    guest = Guest.objects.get(id=data['id'])
    guest.confirmed = data["confirmed"]
    guest.save()

    for comp in companions:
        companion = Companion.objects.get(id=comp['id'])
        companion.confirmed = comp['confirmed']
        companion.save()

    json_to_response = {}

    return HttpResponse(json.dumps(json_to_response),
                        content_type="application/json")


@csrf_exempt
def set_guests(request):

    data = json.loads(request.body)

    for guest in data:
        guest_number = [*guest.keys()][0]
        guest_name = guest[guest_number]
        try:

            guest_model = Guest.objects.get(cellphone=guest_number)
            Companion.objects.create(name=guest_name,
                                     confirmed=False,
                                     guest=guest_model)
        except:
            Guest.objects.create(cellphone=guest_number,
                                 name=guest_name,
                                 confirmed=False)
    return HttpResponse()


@csrf_exempt
def get_metrics(request):

    companions = Companion.objects.all()
    guests = Guest.objects.all()

    confirmed_companions = [*filter(lambda x: x.confirmed == True, companions)]
    confirmed_guests = [*filter(lambda x: x.confirmed == True, guests)]

    confirmed = []
    not_confirmed = []

    for guest in guests:
        guest_dict = {'name': guest.name, 'number': guest.cellphone}
        if guest.confirmed:
            confirmed.append(guest_dict)
        else:
            not_confirmed.append(guest_dict)

    for companion in companions:
        companion_dict = {
            'name': companion.name,
            'number': companion.guest.cellphone
        }
        if companion.confirmed:
            confirmed.append(companion_dict)
        else:
            not_confirmed.append(companion_dict)

    json_to_response = {
        'total_invitados': len(companions) + len(guests),
        'total_confirmados': len(confirmed_companions) + len(confirmed_guests),
        'lista_confirmados': confirmed,
        'lista_pendientes': not_confirmed,
    }

    return HttpResponse(json.dumps(json_to_response),
                        content_type="application/json")
