package cl.chile.somosafac.mapper;

import cl.chile.somosafac.DTO.NotificacionDTO;
import cl.chile.somosafac.entity.NotificacionEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-21T18:11:34-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class NotificacionMapperImpl implements NotificacionMapper {

    @Override
    public NotificacionDTO toDto(NotificacionEntity notificacion) {
        if ( notificacion == null ) {
            return null;
        }

        NotificacionDTO notificacionDTO = new NotificacionDTO();

        return notificacionDTO;
    }

    @Override
    public NotificacionEntity toEntity(NotificacionDTO notificacionDTO) {
        if ( notificacionDTO == null ) {
            return null;
        }

        NotificacionEntity notificacionEntity = new NotificacionEntity();

        return notificacionEntity;
    }
}
