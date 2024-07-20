package org.example.event_management.service;
import org.example.event_management.model.Event;
import org.example.event_management.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    @Transactional(readOnly = true)
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }
    @Transactional
    public Event addEvent(Event event) {

        return eventRepository.save(event);
    }
    @Transactional
    public Optional<Event> updateEvent(Long id, Event eventDetails) {
        return eventRepository.findById(id).map(event -> {
            event.setName(eventDetails.getName());
            event.setDescription(eventDetails.getDescription());
            event.setDate(eventDetails.getDate());
            event.setAttendees(eventDetails.getAttendees());
            event.setLocation(eventDetails.getLocation());
            return eventRepository.save(event);
        });
    }
    @Transactional(readOnly = true)
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
